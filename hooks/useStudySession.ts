import { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { KanjiData } from '../utils/kanjiData'

export function useStudySession(initialKanjiList: KanjiData[]) {
  const navigate = useNavigate()
  const [remainingKanji, setRemainingKanji] = useState<KanjiData[]>([])
  const [currentKanji, setCurrentKanji] = useState<KanjiData | null>(null)
  const [isComplete, setIsComplete] = useState(false)

  // 初期化
  useEffect(() => {
    if (!initialKanjiList?.length) {
      navigate('/grade1-kanji')
      return
    }
    setRemainingKanji([...initialKanjiList])
  }, [initialKanjiList, navigate])

  // 完了時の処理
  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        navigate('/grade1-kanji')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isComplete, navigate])

  const completeCurrentKanji = useCallback(() => {
    if (!currentKanji) return

    const newRemainingKanji = remainingKanji.filter(k => k.kanji !== currentKanji.kanji)
    setRemainingKanji(newRemainingKanji)
    
    if (newRemainingKanji.length === 0) {
      setIsComplete(true)
    }
  }, [currentKanji, remainingKanji])

  const showNextKanji = useCallback(() => {
    if (remainingKanji.length === 0) {
      setIsComplete(true)
      return
    }

    const randomIndex = Math.floor(Math.random() * remainingKanji.length)
    const nextKanji = remainingKanji[randomIndex]
    setCurrentKanji(nextKanji)
  }, [remainingKanji])

  return {
    remainingKanji,
    currentKanji,
    isComplete,
    completeCurrentKanji,
    showNextKanji
  }
}