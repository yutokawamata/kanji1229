import React from 'react'
import { KanjiData } from '../utils/kanjiData'

interface KanjiDisplayProps {
  kanji: KanjiData
  position: { x: number; y: number }
  onKanjiClick: () => void
  showImage: boolean
}

export function KanjiDisplay({ kanji, position, onKanjiClick, showImage }: KanjiDisplayProps) {
  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)'
      }}
      className="flex flex-col items-center"
    >
      <button
        onClick={onKanjiClick}
        className="text-6xl font-bold bg-white p-8 rounded-2xl shadow-lg
                 hover:shadow-xl transition-shadow duration-200
                 active:transform active:scale-95"
      >
        {kanji.kanji}
      </button>

      {showImage && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-500 text-center">
            ※ 画像は準備中です
          </p>
        </div>
      )}
    </div>
  )
}