import { useState } from 'react'
import { quizQuestions } from '../data'

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const choose = (optIndex) => {
    const newAnswers = [...answers, optIndex]
    setAnswers(newAnswers)
    if (current + 1 < quizQuestions.length) {
      setCurrent(current + 1)
    } else {
      newAnswers.forEach((a, i) => {
        if (a === quizQuestions[i].answer) setScore(score + 1)
      })
      setFinished(true)
    }
  }

  const restart = () => {
    setCurrent(0)
    setAnswers([])
    setFinished(false)
  }

  if (finished) {
    return (
      <div className="quiz">
        <h1>Assessment Terminated</h1>
        <p>Result: {score}</p>
        <span className="link" onClick={restart}>re-execute</span>
      </div>
    )
  }

  const q = quizQuestions[current]
  return (
    <div className="quiz">
      <h1>Assessment</h1>
      <h3>{q.q}</h3>
      <div className="options">
        {q.options.map((o, i) => (
          <div className="option" onClick={() => choose(i)}>{o}</div>
        ))}
      </div>
    </div>
  )
}
