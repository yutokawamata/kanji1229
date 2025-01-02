import React from 'react'
import { GraduationCap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function GradeSelection() {
  const navigate = useNavigate()
  const grades = [1, 2, 3]

  const handleGradeClick = (grade: number) => {
    if (grade === 1) {
      navigate('/grade1-kanji')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">学年を選択してください</h1>
      </div>
      
      <div className="flex flex-col gap-4 w-full max-w-xs">
        {grades.map((grade) => (
          <button
            key={grade}
            className={`bg-white hover:bg-blue-50 text-gray-800 font-semibold py-4 px-8 rounded-lg shadow-md 
                     transition-all duration-200 ease-in-out hover:shadow-lg border border-gray-200
                     active:transform active:scale-95 ${grade !== 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => handleGradeClick(grade)}
            disabled={grade !== 1}
          >
            {grade}年生
          </button>
        ))}
      </div>
    </div>
  )
}