import { useState } from 'react'

export default function Courses({ courses, setCourses, openCourse }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = courses.filter(
    (c) => c.title.includes(query) && (category === 'All' || c.category === category)
  )

  const enroll = (course) => {
    course.enrolled = true
    setCourses(courses)
  }

  const unenroll = (id) => {
    setCourses(courses.map((c) => (c.id === id ? { ...c, enrolled: false } : c)))
  }

  return (
    <div>
      <h1>Module Entities</h1>
      <div className="toolbar">
        <input
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option>Programming</option>
          <option>Data</option>
          <option>Design</option>
          <option>Business</option>
        </select>
      </div>

      {filtered.length === 0 && <p className="faint">0 results.</p>}

      <div className="grid">
        {filtered.map((c) => (
          <div className="card">
            <img src={c.image} onClick={() => openCourse(c.id)} />
            <div className="card-body">
              <p className="code">{c.code}</p>
              <h3 onClick={() => openCourse(c.id)}>{c.title}</h3>
              <p className="faint">{c.instructor}</p>
              {c.enrolled ? (
                <button className="btn-green" onClick={() => unenroll(c.id)}>Unenroll</button>
              ) : (
                <button className="btn-b" onClick={() => enroll(c)}>Enroll</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
