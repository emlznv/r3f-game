import React from 'react'
import { OrthographicCamera } from '@react-three/drei'

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
      />
      <hemisphereLight
        name="Default Ambient Light"
        intensity={0.55}
        color="#eaeaea"
      />
    </>
  )
}
  