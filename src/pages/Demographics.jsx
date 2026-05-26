import { useMemo, useState } from 'react'
import Nav from '../components/Nav'
import BackButton from '../components/BackButton'

function formatLabel(label) {
  return label
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function sortScores(scores = {}) {
  return Object.entries(scores)
    .map(([label, value]) => ({
      label,
      value,
      percent: Number(value) * 100,
    }))
    .sort((a, b) => b.value - a.value)
}

const Demographics = () => {
  const analysis = useMemo(() => {
    const stored = localStorage.getItem('skinstricAnalysis')
    return stored ? JSON.parse(stored) : null
  }, [])

  const raceScores = sortScores(analysis?.race)
  const ageScores = sortScores(analysis?.age)
  const genderScores = sortScores(analysis?.gender)

  const [selectedRace, setSelectedRace] = useState(raceScores[0]?.label || '')
  const [selectedAge, setSelectedAge] = useState(ageScores[0]?.label || '')
  const [selectedGender, setSelectedGender] = useState(genderScores[0]?.label || '')
  const [activeCategory, setActiveCategory] = useState('race')

  const categoryData = {
    race: {
      label: 'Race',
      selected: selectedRace,
      setSelected: setSelectedRace,
      scores: raceScores,
    },
    age: {
      label: 'Age',
      selected: selectedAge,
      setSelected: setSelectedAge,
      scores: ageScores,
    },
    gender: {
      label: 'Sex',
      selected: selectedGender,
      setSelected: setSelectedGender,
      scores: genderScores,
    },
  }

  const activeData = categoryData[activeCategory]
  const activeScore =
    activeData.scores.find((score) => score.label === activeData.selected) ||
    activeData.scores[0] ||
    { percent: 0, label: '' }

  return (
    <>
      <Nav showEnterCode={false} section="ANALYSIS" />

      <main className="relative min-h-screen overflow-x-hidden bg-[#fcfcfc] px-5 pb-32 pt-[88px] text-[#1a1b1c] md:px-8 md:pt-[96px]">
        <section className="mb-8 md:mb-14">
          <p className="text-[14px] font-semibold uppercase">A.I. Analysis</p>
          <h1 className="mt-2 text-[38px] font-normal uppercase leading-none md:text-[56px]">
            Demographics
          </h1>
          <p className="mt-3 text-[12px] font-semibold uppercase tracking-wide text-[#1a1b1c]/80">
            Predicted race, age and gender
          </p>
        </section>

        <section className="grid grid-cols-1 gap-3 pr-0 lg:grid-cols-[140px_1fr_280px] lg:pr-3">
          <aside className="grid grid-cols-3 lg:block">
            {[
              ['race', selectedRace, 'Race'],
              ['age', selectedAge, 'Age'],
              ['gender', selectedGender, 'Sex'],
            ].map(([key, value, label]) => (
              <button
                key={key}
                className={`h-[74px] w-full border-t border-[#1a1b1c] px-3 text-left ${
                  activeCategory === key ? 'bg-[#1a1b1c] text-white' : 'bg-[#f1f1f1]'
                }`}
                onClick={() => setActiveCategory(key)}
              >
                <p className="text-[12px] font-semibold uppercase leading-none">
                  {key === 'age' ? value : formatLabel(value)}
                </p>
                <p className="mt-6 text-[11px] font-semibold uppercase leading-none">
                  {label}
                </p>
              </button>
            ))}
          </aside>

          <section className="relative min-h-[300px] border-t border-[#1a1b1c] bg-[#f3f3f3] p-5 md:min-h-[340px] md:p-6">
            <h2 className="text-[28px] font-normal leading-none">
              {activeCategory === 'age'
                ? activeData.selected
                : formatLabel(activeData.selected)}
            </h2>

            <div className="absolute right-5 top-1/2 flex h-[180px] w-[180px] -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#1a1b1c] md:right-12 md:h-[240px] md:w-[240px]">
              <span className="text-[32px] font-normal leading-none">
                {activeScore.percent.toFixed(0)}
              </span>
              <span className="ml-1 text-[16px]">%</span>
            </div>
          </section>

          <section className="min-h-[300px] border-t border-[#1a1b1c] bg-[#f3f3f3] md:min-h-[340px]">
            <div className="flex items-center justify-between px-3 py-3 text-[11px] font-semibold uppercase">
              <span>{activeData.label}</span>
              <span>A.I. Confidence</span>
            </div>

            <div>
              {activeData.scores.map((score) => (
                <button
                  key={score.label}
                  className={`flex w-full items-center justify-between px-3 py-2 text-left text-[12px] font-semibold ${
                    activeData.selected === score.label
                      ? 'bg-[#1a1b1c] text-white'
                      : 'bg-[#f3f3f3] text-[#1a1b1c]'
                  }`}
                  onClick={() => activeData.setSelected(score.label)}
                >
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rotate-45 border border-current"></span>
                    <span>{formatLabel(score.label)}</span>
                  </span>
                  <span>{score.percent.toFixed(2)}%</span>
                </button>
              ))}
            </div>
          </section>
        </section>

        <p className="mt-8 text-center text-[11px] font-semibold text-[#1a1b1c]/30 lg:absolute lg:bottom-9 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2">
          If A.I. estimate is wrong, select the correct one.
        </p>

        <div className="mt-5 flex justify-end gap-3 lg:absolute lg:bottom-8 lg:right-8 lg:mt-0">
          <button className="border border-[#1a1b1c] px-5 py-2 text-[11px] font-semibold uppercase">
            Reset
          </button>
          <button className="bg-[#1a1b1c] px-5 py-2 text-[11px] font-semibold uppercase text-white">
            Confirm
          </button>
        </div>

        <BackButton to="/results" />
      </main>
    </>
  )
}

export default Demographics
