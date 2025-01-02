import React from 'react'
import { Check } from 'lucide-react'

interface KanjiCheckboxProps {
  kanji: string
  isChecked: boolean
  onChange: (checked: boolean) => void
}

export function KanjiCheckbox({ kanji, isChecked, onChange }: KanjiCheckboxProps) {
  return (
    <div
      onClick={() => onChange(!isChecked)}
      className="bg-white mb-4 p-6 rounded-lg shadow-md flex items-center justify-between
                cursor-pointer hover:shadow-lg transition-shadow duration-200"
    >
      <span className="text-3xl font-bold text-gray-800">{kanji}</span>
      <div className={`w-6 h-6 rounded border ${
        isChecked 
          ? 'bg-blue-500 border-blue-500' 
          : 'border-gray-300'
      } flex items-center justify-center`}>
        {isChecked && <Check className="w-4 h-4 text-white" />}
      </div>
    </div>
  )
}