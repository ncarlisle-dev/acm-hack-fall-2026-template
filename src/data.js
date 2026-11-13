export const initialCourses = [
  {
    id: 1,
    code: 'CS-101',
    title: 'Intro to Web Development',
    instructor: 'Dr. Amara Okafor',
    category: 'Programming',
    enrolled: true,
    startDate: 1767225600000,
    image: 'https://picsum.photos/seed/web/400/200',
    lessons: [
      { id: 1, title: 'How the Web Works', duration: 12, completed: true },
      { id: 2, title: 'HTML Fundamentals', duration: 25, completed: true },
      { id: 3, title: 'Styling with CSS', duration: 30, completed: false },
      { id: 4, title: 'JavaScript Basics', duration: 40, completed: false },
    ],
  },
  {
    id: 2,
    code: 'DS-210',
    title: 'Data Science with Python',
    instructor: 'Prof. Liam Chen',
    category: 'Data',
    enrolled: true,
    startDate: 1769904000000,
    image: 'https://picsum.photos/seed/data/400/200',
    lessons: [
      { id: 1, title: 'Python Refresher', duration: 20, completed: true },
      { id: 2, title: 'NumPy Arrays', duration: 35, completed: true },
      { id: 3, title: 'Pandas DataFrames', duration: 45, completed: true },
    ],
  },
  {
    id: 3,
    code: 'UX-150',
    title: 'User Experience Design',
    instructor: 'Sofia Martínez',
    category: 'Design',
    enrolled: false,
    startDate: 1772323200000,
    image: 'https://picsum.photos/seed/ux/400/200',
    lessons: [
      { id: 1, title: 'What is UX?', duration: 15, completed: false },
      { id: 2, title: 'Nielsen Heuristics', duration: 30, completed: false },
      { id: 3, title: 'Wireframing', duration: 25, completed: false },
      { id: 4, title: 'Usability Testing', duration: 35, completed: false },
      { id: 5, title: 'Accessibility', duration: 30, completed: false },
    ],
  },
  {
    id: 4,
    code: 'MK-200',
    title: 'Digital Marketing Essentials',
    instructor: 'Hannah Becker',
    category: 'Business',
    enrolled: false,
    startDate: 1775001600000,
    image: 'https://picsum.photos/seed/market/400/200',
    lessons: [],
  },
  {
    id: 5,
    code: 'ST-120',
    title: 'Statistics for Beginners',
    instructor: 'Dr. Raj Patel',
    category: 'Data',
    enrolled: true,
    startDate: 1767830400000,
    image: 'https://picsum.photos/seed/stats/400/200',
    lessons: [
      { id: 1, title: 'Descriptive Statistics', duration: 30, completed: true },
    ],
  },
  {
    id: 6,
    code: 'PM-300',
    title: 'Project Management Fundamentals',
    instructor: 'Grace Kim',
    category: 'Business',
    enrolled: false,
    startDate: 1777593600000,
    image: 'https://picsum.photos/seed/pm/400/200',
    lessons: [
      { id: 1, title: 'Project Lifecycle', duration: 20, completed: false },
      { id: 2, title: 'Agile & Scrum', duration: 40, completed: false },
    ],
  },
]

export const quizQuestions = [
  {
    q: 'Which HTML tag is used for the largest heading?',
    options: ['<head>', '<h6>', '<h1>', '<header>'],
    answer: 2,
  },
  {
    q: 'What does CSS stand for?',
    options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Syntax', 'Colorful Style Sheets'],
    answer: 1,
  },
  {
    q: 'Which keyword declares a constant in JavaScript?',
    options: ['var', 'let', 'const', 'static'],
    answer: 2,
  },
  {
    q: 'What does the DOM stand for?',
    options: ['Document Object Model', 'Data Object Map', 'Display Output Mode', 'Digital Order Model'],
    answer: 0,
  },
  {
    q: 'Which method adds an item to the end of an array?',
    options: ['shift()', 'push()', 'pop()', 'unshift()'],
    answer: 1,
  },
]

export const announcements = [
  '📢 System maintenance scheduled — check back later',
  '🎉 New courses added this month!',
  '⚠️ Reminder: complete your profile',
  '🔥 Limited-time: 3 new badges available',
  '📅 Office hours moved',
]
