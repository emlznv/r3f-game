import React from 'react'
import useSpline from '@splinetool/r3f-spline'

export const CaseFile = () => {
  const { nodes, materials } = useSpline('https://prod.spline.design/p-6Her3hHAitHm8E/scene.splinecode')

  return (
    <group name="Clipboard" position={[-106.22, 1.42, 51.32]} rotation={[-Math.PI / 2, 0, 0.15]} scale={0.84}>
      <group name="Document" position={[-7.51, 43.05, 3.54]} rotation={[0, 0, 0]} scale={0.27}>
        <mesh
          name="ConfidentialText"
          geometry={nodes.ConfidentialText.geometry}
          material={materials['ConfidentialText Material']}
          castShadow
          receiveShadow
          position={[67.29, -85.14, -4.65]}
          rotation={[0, 0, 0.34]}
          scale={4.35}
        />
        <mesh
          name="DocumentPaper"
          geometry={nodes.DocumentPaper.geometry}
          material={materials.paper2}
          castShadow
          receiveShadow
          position={[30.94, 31.13, -6.77]}
          rotation={[3.14, 0, Math.PI]}
          scale={[1.8, 1.8, 0.02]}
        />
      </group>
      <group name="clip" position={[0.99, 93.26, 1.73]}>
        <mesh
          name="clip1"
          geometry={nodes.clip1.geometry}
          material={nodes.clip1.material}
          castShadow
          receiveShadow
          position={[-1.76, -0.09, 0]}
          scale={[0.18, 0.18, 0.79]}
        />
        <mesh
          name="ClipCube1"
          geometry={nodes.ClipCube1.geometry}
          material={materials.grey}
          castShadow
          receiveShadow
          position={[-0.1, -2.62, -0.16]}
          scale={[0.43, 0.66, 0.72]}
        />
        <mesh
          name="ClipCube2"
          geometry={nodes.ClipCube2.geometry}
          material={materials.grey}
          castShadow
          receiveShadow
          position={[-0.1, 2.66, 0.31]}
          scale={[0.53, 0.34, 0.53]}
        />
      </group>
      <mesh
        name="ClipBody"
        geometry={nodes.ClipBody.geometry}
        material={materials.ClipBody}
        castShadow
        receiveShadow
        position={[0, 50.04, -0.41]}
        rotation={[0, 0, 0]}
        scale={[0.72, 0.72, 0.03]}
      />
    </group>
  )
}