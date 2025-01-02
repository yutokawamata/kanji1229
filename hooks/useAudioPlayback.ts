import { useState, useCallback } from 'react'

export function useAudioPlayback() {
  const [isPlaying, setIsPlaying] = useState(false)

  const playAudio = useCallback((text: string): Promise<void> => {
    return new Promise((resolve) => {
      setIsPlaying(true)
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'ja-JP'
      
      utterance.onend = () => {
        setIsPlaying(false)
        resolve()
      }
      
      speechSynthesis.speak(utterance)
    })
  }, [])

  return { isPlaying, playAudio }
}