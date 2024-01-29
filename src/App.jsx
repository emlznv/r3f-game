import React, { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Laptop } from './components/Laptop'
import { PasswordInput } from './components/PasswordInput'
import './App.css'
import { useFigletFromText } from './hooks/useFigletFromText'


export const App = () => {
  const cameraRef = useRef()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)
  // const note = 'See things backwards to move forward.'
  const { generatedWord, generatedFiglet } = useFigletFromText()

  const handleLogin = (passwordInput) => {
    if (passwordInput === generatedWord) {
      setIsLoggedIn(true)
    }
  }

  // useEffect(() => {
  //   generatedFigletLogo && setLoading(false)
  // }, [generatedFigletLogo])

  // Shows playroom UI, enables players joining, etc.
  // const start = async () => {
  //   await insertCoin()
  // }

  // useEffect(() => {
  //   start()

  //   onPlayerJoin((state) => {
  //     state.onQuit(() => {
  //       resetGame()
  //     })
  //   })
  // }, [])

  // in Spline add sticker with Model: Processor: , etc and in code change em ?
  
  return (
    <Canvas camera={{ position: [10, 10, 10], fov: 70 }} shadows flat linear>
      <color attach="background" args={['lightblue']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls ref={cameraRef} />
      <Laptop isLoggedIn={isLoggedIn} generatedLogo={generatedFiglet} />
      {!isLoggedIn && <PasswordInput handleLogin={handleLogin} />}
    </Canvas>
  )
}

