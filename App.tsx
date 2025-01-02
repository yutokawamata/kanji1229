import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GradeSelection } from './pages/GradeSelection'
import { Grade1Kanji } from './pages/Grade1Kanji'
import { StudyPage } from './pages/StudyPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GradeSelection />} />
        <Route path="/grade1-kanji" element={<Grade1Kanji />} />
        <Route path="/study" element={<StudyPage />} />
      </Routes>
    </BrowserRouter>
  )
}