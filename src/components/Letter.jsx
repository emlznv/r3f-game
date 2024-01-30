import React from 'react'
import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export const Letter = ({ ...props }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/kaMX314qLbZQ-Mgi/scene.splinecode')
  return (
    <>
      <group {...props} dispose={null}>
        <scene name="Scene">
          <group name="Document" position={[0, 51.16, -44.62]} rotation={[0, 0, 0]}>
            <group name="paper" position={[0.08, -0.54, -4.66]} scale={0.51}>
              <mesh
                name="Rectangle 2"
                geometry={nodes['Rectangle 2'].geometry}
                material={materials['white-2']}
                castShadow
                receiveShadow
                position={[30.93, 31.46, -4.98]}
              />
              <mesh
                name="Rectangle"
                geometry={nodes.Rectangle.geometry}
                material={materials['folder 2']}
                castShadow
                receiveShadow
                position={[-30.93, -31.46, 0.98]}
              />
            </group>
          </group>
          <OrthographicCamera
            name="Default Camera"
            makeDefault={true}
            zoom={1.85}
            far={50000}
            near={-50000}
            position={[404.43, 429.3, 807.55]}
            rotation={[-0.49, 0.42, 0.21]}
          >
            <directionalLight
              name="Default Directional Light"
              intensity={0.75}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-near={-10000}
              shadow-camera-far={100000}
              position={[850000, 1300000, 1000000]}
            />
          </OrthographicCamera>
          <hemisphereLight
            name="Default Ambient Light"
            intensity={0.75}
            color="#eaeaea"
          />
        </scene>
      </group>
    </>
  )
}
