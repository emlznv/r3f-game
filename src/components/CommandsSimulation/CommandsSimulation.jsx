import React, { useEffect, useState } from 'react'
import { ACCESS_COMMANDS, TIME_BETWEEN_COMMANDS } from '../../utils/constants'

export const CommandsSimulation = () => {
  const [output, setOutput] = useState('')
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)

  const simulateTypingEffect = () => {
    if (currentCommandIndex < ACCESS_COMMANDS.length) {
      const currentCommand = ACCESS_COMMANDS[currentCommandIndex]
      setOutput((prevOutput) => prevOutput + currentCommand + '\n')

      setTimeout(() => {
        setCurrentCommandIndex((prevIndex) => prevIndex + 1)
      }, TIME_BETWEEN_COMMANDS)
    }
  }

  useEffect(() => {
    simulateTypingEffect()
  }, [currentCommandIndex])

  return (
    <pre style={{ color: '#17ad2f', fontSize: '8px', userSelect: 'none' }}>{output}</pre>
  )
}

