import React, { useState } from 'react'
import { Html } from '@react-three/drei'
import { ControlledInput } from './ControlledInput'

export const PasswordInput = ({ handleLogin }) => {
  const [text, setText] = useState('')
  {/** occlude makes the input not see through */}
  return (
    <Html transform occlude scale={[15, 15, 15]} position={[0, 50, -43]} rotation={[-0.2, 0, 0]}>
      <div style={{ textAlign: 'center' }}>
        <ControlledInput type={text} onChange={(e) => setText(e.target.value)} value={text} handleLogin={handleLogin} />
      </div>
    </Html>
  )
}
  