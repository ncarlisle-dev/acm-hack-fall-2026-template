import { useState } from 'react'
import { getProgress } from './Dashboard'

export default function CourseDetail({ course, courses, setCourses, setPage }) {
  const [hideDone, setHideDone] = useState(false)
  const nextUp = course.lessons.find((l) => !l.completed) || course.lessons[0]

  const visible = hideDone ? course.lessons.filter((l) => !l.completed) : course.lessons

  const toggle = (index) => {
    const updated = courses.map((c) => {
      if (c.id !== course.id) return c
      const lessons = c.lessons.map((l, i) =>
        i === index ? { ...l, completed: !l.completed } : l
      )
      return { ...c, lessons }
    })
    setCourses(updated)
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p className="faint">{course.code} · {course.instructor}</p>
      <p>Progress: {getProgress(course)}%</p>
      <div className="next-up">Next up: <b>{nextUp.title}</b></div>

      <label className="faint">
        <input type="checkbox" checked={hideDone} onChange={() => setHideDone(!hideDone)} />
        hide done
      </label>

      <ul className="lessons">
        {visible.map((l, i) => (
          <li>
            <input type="checkbox" checked={l.completed} onChange={() => toggle(i)} />
            <span className={l.completed ? 'done' : ''}>{l.title}</span>
            <span className="faint"> — {l.duration * 60}s</span>
          </li>
        ))}
      </ul>

      <button className="btn-c" onClick={() => setPage('quiz')}>Execute Assessment</button>
    </div>
  )
}
