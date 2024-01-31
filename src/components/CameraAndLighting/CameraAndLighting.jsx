import React from 'react'
import { OrthographicCamera, SpotLight } from '@react-three/drei'

export const CameraAndLighting = () => {
  return (
    <>
      <OrthographicCamera
        name="Default Camera"
        makeDefault={true}
        zoom={3}
        far={50000}
        near={-50000}
        position={[404.43, 449.3, 807.55]}
        rotation={[-0.49, 0.42, 0.21]}
      >
      </OrthographicCamera>
      <hemisphereLight
        name="Default Ambient Light"
        intensity={0.25}
        color="#eaeaea"
      />
      <SpotLight
        name="Spot Light"
        castShadow
        intensity={2.15}
        angle={Math.PI / 6}
        decay={1.3}
        distance={2000}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-fov={119.99999999999999}
        shadow-camera-near={100}
        shadow-camera-far={100000}
        color="#c2af89"
        position={[-326.39, 126.61, -40.02]}
        rotation={[0, 0, 1.31]}
        scale={[0.23, 0.34, 0.23]}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
    </>
  )
}