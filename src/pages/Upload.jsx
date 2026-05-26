import { useRef, useState } from 'react'
import Nav from '../components/Nav'
import BackButton from '../components/BackButton'
import Gallery from '../assets/gallery.svg'
import Scan from '../assets/scan.svg'
import { useNavigate } from 'react-router-dom'

const Upload = () => {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const [selectedFileName, setSelectedFileName] = useState('')

  function handleGalleryClick() {
    fileInputRef.current?.click()
  }

  function handleFileChange(event) {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    const reader = new FileReader()

    reader.onloadend = () => {
      const result = reader.result
      const base64Image = String(result).split(',')[1]

      setSelectedFileName(file.name)
      localStorage.setItem('skinstricImageName', file.name)
      localStorage.setItem('skinstricImageBase64', base64Image)
      navigate('/analyzing')
    }

    reader.readAsDataURL(file)
  }

  return (
    <>
      <Nav showEnterCode={false} />

      <main className="relative min-h-screen overflow-hidden bg-[#fcfcfc] text-[#1a1b1c]">
        <p className="absolute left-5 top-[86px] text-[14px] font-semibold uppercase leading-none text-[#1a1b1c] md:left-8 md:text-[16px]">
          To start analysis
        </p>

        <section className="mx-auto flex min-h-screen w-full max-w-[980px] flex-col items-center justify-center gap-0 px-8 pt-16 lg:flex-row lg:justify-between lg:gap-0 lg:pt-0">
          <button
            type="button"
            className="group relative h-[220px] w-[280px] shrink-0 -translate-y-16 scale-[0.68] bg-transparent sm:-translate-y-14 sm:scale-[0.78] lg:h-[320px] lg:w-[320px] lg:translate-y-0 lg:scale-100"
          >
            <span className="animate-diamond-fast absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-[#1a1b1c]/35 lg:h-[280px] lg:w-[280px]"></span>
            <span className="animate-diamond-medium absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-[#1a1b1c]/20 lg:h-[320px] lg:w-[320px]"></span>
            <span className="animate-diamond-slow absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-[#1a1b1c]/10 lg:h-[360px] lg:w-[360px]"></span>

            <img
              src={Scan}
              alt=""
              className="absolute left-1/2 top-1/2 z-10 h-[112px] w-[112px] -translate-x-1/2 -translate-y-1/2 rotate-0 object-contain opacity-100 transition-transform duration-300 group-hover:scale-95"
            />
            <svg
              className="pointer-events-none absolute inset-0 hidden lg:block"
              viewBox="0 0 320 320"
              aria-hidden="true"
            >
              <line
                x1="200"
                y1="120"
                x2="260"
                y2="60"
                stroke="#1a1b1c"
                strokeOpacity="0.65"
                strokeWidth="1"
              />
            </svg>
            <span className="absolute left-1/2 top-[232px] w-[180px] -translate-x-1/2 text-center text-[13px] font-semibold uppercase leading-[1.45] tracking-wide lg:left-[258px] lg:top-[50px] lg:w-[170px] lg:translate-x-0 lg:text-left">
              Allow A.I.
              <br />
              to scan your face
            </span>
          </button>

          <button
            type="button"
            className="group relative h-[220px] w-[280px] shrink-0 translate-y-3 scale-[0.68] bg-transparent sm:translate-y-2 sm:scale-[0.78] lg:h-[320px] lg:w-[320px] lg:translate-y-0 lg:scale-100"
            onClick={handleGalleryClick}
          >
            <span className="animate-diamond-fast absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-[#1a1b1c]/35 lg:h-[280px] lg:w-[280px]"></span>
            <span className="animate-diamond-medium absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-[#1a1b1c]/20 lg:h-[320px] lg:w-[320px]"></span>
            <span className="animate-diamond-slow absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-[#1a1b1c]/10 lg:h-[360px] lg:w-[360px]"></span>

            <img
              src={Gallery}
              alt=""
              className="absolute left-1/2 top-1/2 z-10 h-[112px] w-[112px] -translate-x-1/2 -translate-y-1/2 rotate-0 object-contain opacity-100 transition-transform duration-300 group-hover:scale-95"
            />
            <svg
              className="pointer-events-none absolute inset-0 hidden lg:block"
              viewBox="0 0 320 320"
              aria-hidden="true"
            >
              <line
                x1="120"
                y1="200"
                x2="60"
                y2="260"
                stroke="#1a1b1c"
                strokeOpacity="0.65"
                strokeWidth="1"
              />
            </svg>
            <span className="absolute left-1/2 top-[232px] w-[180px] -translate-x-1/2 text-center text-[13px] font-semibold uppercase leading-[1.45] tracking-wide lg:left-[-112px] lg:top-[254px] lg:translate-x-0 lg:text-right">
              Allow A.I.
              <br />
              to access gallery
            </span>
          </button>
        </section>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {selectedFileName && (
          <p className="absolute bottom-20 left-1/2 max-w-[240px] -translate-x-1/2 truncate text-center text-[12px] font-semibold uppercase tracking-wide text-[#1a1b1c] md:bottom-8 md:max-w-[320px]">
            Selected: {selectedFileName}
          </p>
        )}

        <div className="absolute bottom-16 left-0 md:bottom-8">
          <BackButton to="/intro" />
        </div>
      </main>
    </>
  )
}

export default Upload
