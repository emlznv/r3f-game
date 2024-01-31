import React from 'react'
import useSpline from '@splinetool/r3f-spline'

export const LaptopSticker = () => {
  const { nodes, materials } = useSpline('https://prod.spline.design/p-6Her3hHAitHm8E/scene.splinecode')

  return (
    <group name="Sticker" position={[-48.03, 4.13, 44.95]}>
      <mesh
        name="StickerOutline"
        geometry={nodes.StickerOutline.geometry}
        material={materials['StickerOutline Material']}
        castShadow
        receiveShadow
        position={[-0.71, 0.04, 0.12]}
        rotation={[-Math.PI / 2, 0, -2.11]}
        scale={1}
      />
      <mesh
        name="Sticker1"
        geometry={nodes.Sticker1.geometry}
        material={materials['Sticker1 Material']}
        castShadow
        receiveShadow
        position={[-0.84, -0.07, 0]}
        rotation={[-Math.PI / 2, 0, -2.11]}
        scale={1}
      />
      <mesh
        name="StickerText"
        geometry={nodes.StickerText.geometry}
        material={materials['StickerText Material']}
        castShadow
        receiveShadow
        position={[2.82, 0.07, 2.13]}
        rotation={[-Math.PI / 2, 0, 1.02]}
        scale={1}
      />
    </group>
  )
}