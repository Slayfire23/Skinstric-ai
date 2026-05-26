import Nav from '../components/Nav'
import BackButton from '../components/BackButton'
import NextButton from '../components/NextButton'
import { useNavigate } from 'react-router-dom'

const Results = () => {
  const navigate = useNavigate()

  return (
    <>
      <Nav showEnterCode={false} section="ANALYSIS" />

      <main className="relative min-h-screen overflow-hidden bg-[#fcfcfc] text-[#1a1b1c]">
        <section className="absolute left-5 top-[92px] max-w-[240px] md:left-8 md:top-[102px] md:max-w-[260px]">
          <h1 className="mb-4 text-[16px] font-semibold uppercase leading-none">
            A.I. Analysis
          </h1>
          <p className="text-[12px] font-semibold uppercase leading-[1.6] tracking-wide">
            A.I. has estimated the following.
            <br />
            Fix estimated information if needed.
          </p>
        </section>

        <section className="absolute left-1/2 top-[58%] flex h-[min(520px,88vw)] w-[min(520px,88vw)] -translate-x-1/2 -translate-y-1/2 items-center justify-center md:top-1/2">
          <span className="animate-diamond-fast absolute hidden h-[360px] w-[360px] border-2 border-dashed border-[#1a1b1c]/25 md:block"></span>
          <span className="animate-diamond-medium absolute hidden h-[420px] w-[420px] border-2 border-dashed border-[#1a1b1c]/15 md:block"></span>
          <span className="animate-diamond-slow absolute hidden h-[480px] w-[480px] border-2 border-dashed border-[#1a1b1c]/10 md:block"></span>

          <div className="relative z-10 grid h-[min(285px,58vw)] w-[min(285px,58vw)] rotate-45 grid-cols-2 grid-rows-2 gap-[6px]">
            <button
              className="col-start-1 row-start-1 flex items-center justify-center bg-[#d8d8d8] transition-colors hover:bg-[#cccccc]"
              onClick={() => navigate('/demographics')}
            >
              <span className="-rotate-45 text-center text-[12px] font-semibold uppercase leading-[1.3]">
                Demographics
              </span>
            </button>

            <button className="col-start-1 row-start-2 flex items-center justify-center bg-[#ededed] transition-colors hover:bg-[#e0e0e0]">
              <span className="-rotate-45 text-center text-[12px] font-semibold uppercase leading-[1.3]">
                Skin Type
                <br />
                Details
              </span>
            </button>

            <button className="col-start-2 row-start-1 flex items-center justify-center bg-[#ededed] transition-colors hover:bg-[#e0e0e0]">
              <span className="-rotate-45 text-center text-[12px] font-semibold uppercase leading-[1.3]">
                Cosmetic
                <br />
                Concerns
              </span>
            </button>

            <button className="col-start-2 row-start-2 flex items-center justify-center bg-[#f0f0f0] transition-colors hover:bg-[#e2e2e2]">
              <span className="-rotate-45 text-center text-[12px] font-semibold uppercase leading-[1.3]">
                Weather
              </span>
            </button>
          </div>
        </section>

        <BackButton to="/upload" />
        <NextButton label="Get Summary" to="/results" />
      </main>
    </>
  )
}

export default Results
