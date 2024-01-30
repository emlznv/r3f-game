import React from 'react'
import useSpline from '@splinetool/r3f-spline'

export const UsbDrive = () => {
  const { nodes } = useSpline('https://prod.spline.design/p-6Her3hHAitHm8E/scene.splinecode')

  return (
    <group
      name="UsbDriver"
      position={[76.17, 1.9, -13.46]}
      rotation={[0, 0, -Math.PI]}
      scale={[-0.02, 0.02, 0.02]}
    >
      <mesh
        name="UsbMetal"
        geometry={nodes.UsbMetal.geometry}
        material={nodes.UsbMetal.material}
        castShadow
        receiveShadow
        position={[65.52, 0, 0]}
      />
      <mesh
        name="UsbChip"
        geometry={nodes.UsbChip.geometry}
        material={nodes.UsbChip.material}
        castShadow
        receiveShadow
        position={[65.03, 0, 0]}
      />
      <mesh
        name="UsbCenter"
        geometry={nodes.UsbCenter.geometry}
        material={nodes.UsbCenter.material}
        castShadow
        receiveShadow
        position={[-14.29, 1.57, 0]}
        scale={[0.8, 0.97, 0.97]}
      />
    </group>
  )
}