import React from 'react'

interface StudyProgressProps {
  remaining: number
  total: number
}

export function StudyProgress({ remaining, total }: StudyProgressProps) {
  return (
    <div className="fixed top-6 right-6 bg-white rounded-lg shadow-md p-4">
      <div className="text-gray-600">
        進捗: {total - remaining}/{total} 文字
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((total - remaining) / total) * 100}%` }}
        />
      </div>
    </div>
  )
}