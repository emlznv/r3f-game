import { useState, useEffect } from 'react'
import { getFiglet } from '../api/getFiglet'
import { getRandomWord } from '../api/getRandomWord'

export const useFigletFromText = () => {
  const [generatedWord, setGeneratedWord] = useState('')
  const [generatedFiglet, setGeneratedFiglet] = useState('')

  useEffect(() => {
    const generateFiglet = async () => {
      const word = await getRandomWord()
      const figlet = await getFiglet(word)
      setGeneratedWord(word)
      setGeneratedFiglet(figlet)
    }

    generateFiglet()
  }, [])

  return { generatedWord, generatedFiglet }
}
