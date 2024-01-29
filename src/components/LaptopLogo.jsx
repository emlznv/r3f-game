import React from 'react'
import { Html } from '@react-three/drei'

export const LaptopLogo = ({ generatedLogo }) => {
  return (
    <Html scale={[5, 5, 5]} position={[0, 5, -1]} transform occlude>
      <pre style={{ color: '#494949', userSelect: 'none' }}>{generatedLogo}</pre>
    </Html>
  )
}