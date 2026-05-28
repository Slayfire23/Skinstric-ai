import { useEffect, useRef, useState } from 'react'
import Nav from '../components/Nav'
import BackButton from '../components/BackButton'
import NextButton from '../components/NextButton'
import Scan from '../assets/scan.svg'

const Selfie = () => {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const streamRef = useRef(null)
  const [error, setError] = useState('')
  const [isCameraReady, setIsCameraReady] = useState(false)
  const [capturedImage, setCapturedImage] = useState('')
  const showCameraPreview = isCameraReady && !error

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user',
            width: { ideal: 960 },
            height: { ideal: 960 },
          },
          audio: false,
        })

        streamRef.current = stream

        if (videoRef.current) {
          videoRef.current.srcObject = stream
          setIsCameraReady(true)
        }
      } catch {
        setError('Camera access is needed to take a selfie.')
      }
    }

    startCamera()

    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop())
    }
  }, [])

  function handleCapture() {
    const video = videoRef.current
    const canvas = canvasRef.current

    if (!video || !canvas) {
      return
    }

    const size = Math.min(video.videoWidth || 720, video.videoHeight || 720)
    canvas.width = size
    canvas.height = size

    const context = canvas.getContext('2d')
    const offsetX = ((video.videoWidth || size) - size) / 2
    const offsetY = ((video.videoHeight || size) - size) / 2

    context.drawImage(video, offsetX, offsetY, size, size, 0, 0, size, size)

    const dataUrl = canvas.toDataURL('image/jpeg', 0.9)
    const base64Image = dataUrl.split(',')[1]

    localStorage.setItem('skinstricImageName', 'selfie.jpg')
    localStorage.setItem('skinstricImageBase64', base64Image)
    setCapturedImage(dataUrl)
    streamRef.current?.getTracks().forEach((track) => track.stop())
  }

  return (
    <>
      <Nav
        showEnterCode={false}
        section={showCameraPreview ? 'ANALYSIS' : 'INTRO'}
        variant={showCameraPreview ? 'light' : 'dark'}
      />

      <main
        className={`relative min-h-screen overflow-hidden ${
          showCameraPreview
            ? 'bg-[#1a1b1c] text-white'
            : 'bg-[#fcfcfc] px-5 pt-24 text-[#1a1b1c] md:px-8'
        }`}
      >
        {!showCameraPreview && (
          <p className="absolute left-5 top-[86px] text-[14px] font-semibold uppercase leading-none md:left-8 md:text-[16px]">
            To start analysis
          </p>
        )}

        <section
          className={`mx-auto flex flex-col items-center justify-center ${
            showCameraPreview
              ? 'min-h-screen'
              : 'min-h-[calc(100vh-120px)] max-w-[820px] gap-7 pb-24'
          }`}
        >
          <div
            className={`relative flex items-center justify-center ${
              showCameraPreview
                ? 'h-screen w-screen'
                : 'h-[min(520px,82vw)] w-[min(520px,82vw)]'
            }`}
          >
            {!showCameraPreview && (
              <>
                <span className="animate-diamond-fast absolute h-[min(360px,58vw)] w-[min(360px,58vw)] border-2 border-dashed border-[#1a1b1c]/35"></span>
                <span className="animate-diamond-medium absolute h-[min(420px,68vw)] w-[min(420px,68vw)] border-2 border-dashed border-[#1a1b1c]/20"></span>
                <span className="animate-diamond-slow absolute h-[min(480px,78vw)] w-[min(480px,78vw)] border-2 border-dashed border-[#1a1b1c]/10"></span>
              </>
            )}

            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className={`relative z-10 bg-[#d9d9d9] object-cover ${
                showCameraPreview && !capturedImage
                  ? 'h-screen w-screen'
                  : 'hidden aspect-square w-[min(320px,66vw)] rounded-full'
              }`}
            />

            {capturedImage && (
              <img
                src={capturedImage}
                alt=""
                className="relative z-10 h-screen w-screen bg-[#d9d9d9] object-cover"
              />
            )}

            {!isCameraReady && !error && (
              <div className="relative z-20 flex flex-col items-center text-center">
                <span className="skeleton-shimmer absolute top-1/2 h-[136px] w-[136px] -translate-y-[58%] rounded-full opacity-70"></span>
                <img
                  src={Scan}
                  alt=""
                  className="relative z-10 h-[96px] w-[96px] object-contain opacity-100 sm:h-[112px] sm:w-[112px]"
                />
                <p className="mt-5 text-[12px] font-semibold uppercase tracking-wide">
                  Setting up camera ...
                </p>
                <div className="mt-5 flex w-[180px] flex-col items-center gap-2">
                  <span className="skeleton-shimmer h-[6px] w-full"></span>
                  <span className="skeleton-shimmer h-[6px] w-[68%]"></span>
                </div>
              </div>
            )}
          </div>

          {error ? (
            <p className="max-w-[320px] text-center text-[12px] font-semibold uppercase leading-[1.5] text-red-600">
              {error}
            </p>
          ) : !isCameraReady ? (
            <div className="-mt-12 text-center uppercase text-[#1a1b1c] sm:-mt-16">
              <p className="text-[12px] font-semibold leading-none">
                To get better results make sure to have
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] font-medium leading-none">
                {['Neutral expression', 'Frontal pose', 'Adequate lighting'].map(
                  (tip) => (
                    <span key={tip} className="flex items-center gap-2">
                      <span className="h-[6px] w-[6px] rotate-45 border border-[#1a1b1c]"></span>
                      {tip}
                    </span>
                  ),
                )}
              </div>
            </div>
          ) : !capturedImage ? (
            <button
              type="button"
              className="absolute right-5 top-1/2 z-40 flex -translate-y-1/2 items-center gap-4 bg-transparent p-0 text-[10px] font-semibold uppercase tracking-wide text-white md:right-8"
              onClick={handleCapture}
            >
              <span>Take Picture</span>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white">
                <span className="h-6 w-7 rounded-[5px] border border-white"></span>
                <span className="absolute top-[14px] h-[6px] w-[10px] rounded-t-[3px] border-x border-t border-white"></span>
                <span className="absolute h-3 w-3 rounded-full border border-white"></span>
              </span>
            </button>
          ) : (
            <p className="absolute left-1/2 top-[27%] z-40 -translate-x-1/2 text-[11px] font-semibold uppercase tracking-wide text-white">
              Great shot!
            </p>
          )}
        </section>

        {showCameraPreview && (
          <div className="absolute bottom-8 left-1/2 z-30 w-full max-w-[620px] -translate-x-1/2 px-6 text-center uppercase text-white">
            <p className="text-[10px] font-semibold leading-none">
              To get better results make sure to have
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] font-medium leading-none">
              {['Neutral expression', 'Frontal pose', 'Adequate lighting'].map(
                (tip) => (
                  <span key={tip} className="flex items-center gap-2">
                    <span className="h-[6px] w-[6px] rotate-45 border border-white"></span>
                    {tip}
                  </span>
                ),
              )}
            </div>
          </div>
        )}

        <canvas ref={canvasRef} className="hidden" />
        <BackButton
          to="/upload"
          variant={showCameraPreview ? 'light' : 'dark'}
          position={showCameraPreview ? 'camera' : 'bottom'}
        />
        {capturedImage && (
          <NextButton
            label="Proceed"
            to="/analyzing"
            variant="light"
            position="camera"
          />
        )}
      </main>
    </>
  )
}

export default Selfie
