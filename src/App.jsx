import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Scene } from './components/Scene'
import { Letter } from './components/Letter'
import { CameraAndLighting } from './components/CameraAndLighting'
import './App.css'

export const App = () => {
  const [startedGame, setStartedGame] = useState(true)
  const [loading, setLoading] = useState(true)
  
  return (
    <Canvas shadows flat linear>
      <color attach="background" args={['#5e6063']} />
      <CameraAndLighting />
      <OrbitControls />
      {startedGame
        ? <Scene />
        : <Letter/>
      }
    </Canvas>
  )
}

