import React from 'react'
import { Play } from 'lucide-react'

interface FloatingStartButtonProps {
  onClick: () => void
  disabled: boolean
}

export function FloatingStartButton({ onClick, disabled }: FloatingStartButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2
                 px-8 py-4 rounded-full shadow-lg
                 flex items-center gap-2
                 transition-all duration-200
                 ${disabled 
                   ? 'bg-gray-300 cursor-not-allowed' 
                   : 'bg-blue-500 hover:bg-blue-600 active:transform active:scale-95'}`}
    >
      <Play className="w-5 h-5 text-white" />
      <span className="text-white font-semibold">スタート</span>
    </button>
  )
}