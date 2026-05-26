import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PHASE_TWO_API =
  'https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo'

const Analyzing = () => {
  const navigate = useNavigate()

  useEffect(() => {
    async function analyzeImage() {
      const image = localStorage.getItem('skinstricImageBase64')

      if (!image) {
        navigate('/upload')
        return
      }

      try {
        const response = await fetch(PHASE_TWO_API, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ image }),
        })

        if (!response.ok) {
          throw new Error('Unable to analyze image.')
        }

        const result = await response.json()

        localStorage.setItem('skinstricAnalysis', JSON.stringify(result.data))
        navigate('/results')
      } catch {
        localStorage.removeItem('skinstricImageBase64')
        navigate('/upload')
      }
    }

    analyzeImage()
  }, [navigate])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fcfcfc] text-[#1a1b1c]">
      <section className="absolute left-1/2 top-1/2 flex h-[min(420px,86vw)] w-[min(420px,86vw)] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <span className="animate-diamond-fast absolute h-[min(260px,56vw)] w-[min(260px,56vw)] border-2 border-dashed border-[#1a1b1c]/35"></span>
        <span className="animate-diamond-medium absolute h-[min(320px,70vw)] w-[min(320px,70vw)] border-2 border-dashed border-[#1a1b1c]/20"></span>
        <span className="animate-diamond-slow absolute h-[min(380px,82vw)] w-[min(380px,82vw)] border-2 border-dashed border-[#1a1b1c]/10"></span>

        <p className="relative z-10 text-[12px] font-semibold uppercase tracking-wide">
          Preparing your analysis ...
        </p>
      </section>
    </main>
  )
}

export default Analyzing
