import React, { useState } from 'react'
import useSpline from '@splinetool/r3f-spline'
import { Laptop } from './Laptop'
import { CaseFile } from './CaseFile'
import { useFigletFromText } from '../hooks/useFigletFromText'

export const Scene = () => {
  const { nodes, materials } = useSpline('https://prod.spline.design/p-6Her3hHAitHm8E/scene.splinecode')
  const { generatedWord, generatedFiglet } = useFigletFromText()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (passwordInput) => {
    if (passwordInput === generatedWord) {
      setIsLoggedIn(true)
    }
  }

  return (
    <>
      <group dispose={null} position={[0, -25, 0]}>
        <scene name="Scene">
          <CaseFile/>
          <mesh
            name="Table"
            geometry={nodes.Table.geometry}
            material={materials['Table Material']}
            castShadow
            receiveShadow
            position={[-22.3, -3.78, 8.4]}
            scale={[1.29, 1, 1]}
          />
          <Laptop isLoggedIn={isLoggedIn} handleLogin={handleLogin} generatedLogo={generatedFiglet} />
        </scene>
      </group>
    </>
  )
}
