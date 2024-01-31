import React from "react"
import useSpline from '@splinetool/r3f-spline'
import { Html } from '@react-three/drei'
import { LaptopLogo } from '../LaptopLogo/LaptopLogo'
import { CommandsSimulation } from '../CommandsSimulation/CommandsSimulation'
import { PasswordInput } from '../PasswordInput/PasswordInput'
import { UsbDrive } from "../UsbDrive/UsbDrive"
import { LaptopSticker } from "../LaptopSticker/LaptopSticker"

export const Laptop = ({ isLoggedIn, handleLogin, generatedLogo }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/p-6Her3hHAitHm8E/scene.splinecode')

  return (
    <group name="Computer">
      {!isLoggedIn && <PasswordInput handleLogin={handleLogin} />}
      <UsbDrive />
      <mesh
        name="Screen"
        geometry={nodes.Screen.geometry}
        material={!isLoggedIn ? materials['Screen Material'] : ''}
        castShadow
        receiveShadow
        position={[0, 51.16, -44.62]}
        rotation={[-0.17, 0, 0]}
        scale={[0.61, 0.66, 0.66]}
      >
        {isLoggedIn && (
          <Html className="content" scale={[26.5, 24.5, 25]} position={[0, 0, 2]} transform occlude>
            <div className="wrapper">
              <CommandsSimulation />
            </div>
          </Html>
        )}
      </mesh>
      <mesh
        name="Trackpad"
        geometry={nodes.Trackpad.geometry}
        material={materials.trackpad}
        castShadow
        receiveShadow
        position={[0, 4.61, 44.19]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.3, 0.55, 0.55]}
      />
      <mesh
        name="Keyboard"
        geometry={nodes.Keyboard.geometry}
        material={materials.keyboard}
        castShadow
        receiveShadow
        position={[0, 6.72, 0.08]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.51, 0.55, 0.55]}
      />
      <mesh
        name="LaptopBottom"
        geometry={nodes.LaptopBottom.geometry}
        material={materials['laptop-main']}
        castShadow
        receiveShadow
        position={[0, 4.05, 13.16]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.61, 0.66, 0.66]}
      />
      <mesh
        name="LaptopBack"
        geometry={nodes.LaptopBack.geometry}
        material={materials['laptop-main']}
        castShadow
        receiveShadow
        position={[0, 48.22, -47.93]}
        rotation={[-0.17, 0, 0]}
        scale={[0.61, 0.66, 0.66]}
      >
        <LaptopLogo generatedLogo={generatedLogo} />
      </mesh>
      <LaptopSticker/>
    </group>
  )
}

