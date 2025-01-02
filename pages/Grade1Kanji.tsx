import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { KanjiCheckbox } from '../components/KanjiCheckbox'
import { FloatingStartButton } from '../components/FloatingStartButton'
import { getGrade1Kanji } from '../utils/kanjiData'

export function Grade1Kanji() {
  const navigate = useNavigate()
  const kanjiList = getGrade1Kanji()
  const [selectedKanji, setSelectedKanji] = useState<Set<string>>(new Set())

  const handleKanjiToggle = (kanji: string, checked: boolean) => {
    const newSelected = new Set(selectedKanji)
    if (checked) {
      newSelected.add(kanji)
    } else {
      newSelected.delete(kanji)
    }
    setSelectedKanji(newSelected)
  }

  const handleStart = () => {
    if (selectedKanji.size > 0) {
      navigate('/study', { 
        state: { 
          kanjiList: kanjiList.filter(k => selectedKanji.has(k.kanji))
        }
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6 pb-24">
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-1" />
        戻る
      </button>

      <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        1年生の漢字
      </h1>

      <div className="max-w-md mx-auto">
        {kanjiList.map(({ kanji }) => (
          <KanjiCheckbox
            key={kanji}
            kanji={kanji}
            isChecked={selectedKanji.has(kanji)}
            onChange={(checked) => handleKanjiToggle(kanji, checked)}
          />
        ))}
      </div>

      <FloatingStartButton
        onClick={handleStart}
        disabled={selectedKanji.size === 0}
      />
    </div>
  )
}