import grade1KanjiCsv from '../data/grade1-kanji.csv?raw'

export interface KanjiData {
  kanji: string
  reading: string
  imageUrl?: string // 将来の画像URLのために準備
}

export const parseKanjiCsv = (csv: string): KanjiData[] => {
  const [header, ...lines] = csv.trim().split('\n')
  return lines.map(line => {
    const [kanji, reading] = line.split(',')
    return { kanji, reading }
  })
}

export const getGrade1Kanji = (): KanjiData[] => {
  return parseKanjiCsv(grade1KanjiCsv)
}

export const getRandomPosition = () => {
  const padding = 100 // px from edges
  return {
    x: Math.random() * (window.innerWidth - 2 * padding) + padding,
    y: Math.random() * (window.innerHeight - 2 * padding) + padding,
  }
}