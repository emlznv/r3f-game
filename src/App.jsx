import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Scene } from './components/Scene'
import { Letter } from './components/Letter'
import './App.css'

export const App = () => {
  const [startedGame, setStartedGame] = useState(true)
  const [loading, setLoading] = useState(true)
  
  return (
    <Canvas shadows flat linear>
      <color attach="background" args={['#5e6063']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      {startedGame
        ? <Scene />
        : <Letter/>
      }
    </Canvas>
  )
}

