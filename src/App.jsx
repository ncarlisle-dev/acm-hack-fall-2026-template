import { useState, useEffect } from 'react'
import { initialCourses } from './data'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Courses from './components/Courses'
import CourseDetail from './components/CourseDetail'
import Quiz from './components/Quiz'
import Settings from './components/Settings'

export default function App() {
  const [page, setPage] = useState('dashboard')
  const [courses, setCourses] = useState([])
  const [selectedId, setSelectedId] = useState(null)
  const [user, setUser] = useState({ name: 'Jordan Lee', email: 'jordan.lee@example.edu' })

  useEffect(() => {
    setTimeout(() => {
      setCourses(initialCourses)
    }, 1500)
  }, [])

  const openCourse = (id) => {
    setSelectedId(id)
    setPage('detail')
  }

  const selected = courses.find((c) => c.id === selectedId)

  return (
    <div className="app">
      <Navbar setPage={setPage} user={user} />
      <main className="content">
        {page === 'dashboard' && <Dashboard courses={courses} openCourse={openCourse} user={user} />}
        {page === 'courses' && (
          <Courses courses={courses} setCourses={setCourses} openCourse={openCourse} />
        )}
        {page === 'detail' && selected && (
          <CourseDetail course={selected} courses={courses} setCourses={setCourses} setPage={setPage} />
        )}
        {page === 'quiz' && <Quiz />}
        {page === 'settings' && <Settings user={user} setUser={setUser} setCourses={setCourses} />}
      </main>
      <footer className="footer">© LearnHub · v0.1.0-beta-build-4482</footer>
    </div>
  )
}
