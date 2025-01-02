import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getRandomPosition } from '../utils/kanjiData'
import { KanjiDisplay } from '../components/KanjiDisplay'
import { StudyProgress } from '../components/StudyProgress'
import { CompletionMessage } from '../components/CompletionMessage'
import { useAudioPlayback } from '../hooks/useAudioPlayback'
import { useStudySession } from '../hooks/useStudySession'

const IMAGE_DISPLAY_DURATION = 2000 // 2秒間画像を表示

export function StudyPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const kanjiList = location.state?.kanjiList
  
  const { isPlaying, playAudio } = useAudioPlayback()
  const { 
    remainingKanji, 
    currentKanji, 
    isComplete, 
    completeCurrentKanji, 
    showNextKanji 
  } = useStudySession(kanjiList)

  const [position, setPosition] = useState(getRandomPosition())
  const [showImage, setShowImage] = useState(false)

  useEffect(() => {
    if (!isPlaying && !isComplete && remainingKanji.length > 0 && !showImage) {
      setPosition(getRandomPosition())
      showNextKanji()
    }
  }, [remainingKanji, isPlaying, isComplete, showImage])

  const handleKanjiClick = async () => {
    if (isPlaying || !currentKanji || showImage) return

    await playAudio(currentKanji.reading)
    setShowImage(true)
    
    setTimeout(() => {
      setShowImage(false)
      completeCurrentKanji()
    }, IMAGE_DISPLAY_DURATION)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      <button
        onClick={() => navigate('/grade1-kanji')}
        className="flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-1" />
        戻る
      </button>

      <StudyProgress
        remaining={remainingKanji.length}
        total={kanjiList?.length || 0}
      />

      {isComplete ? (
        <CompletionMessage />
      ) : currentKanji && (
        <KanjiDisplay
          kanji={currentKanji}
          position={position}
          onKanjiClick={handleKanjiClick}
          showImage={showImage}
        />
      )}
    </div>
  )
}