import React, { useEffect, useState  } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { PerspectiveCamera, Environment } from '@react-three/drei'
import './index.css'

function StudioSoLights() {
  return (
    <>
      <Environment
        background={false}
        files={require('./assets/hdri/studio_s_02_1k.hdr')}
      />
      <ambientLight intensity={0.1} />
      <spotLight
        position={[4, 6, 6]}
        angle={0.9}
        intensity={0.3}
        castShadow={true}
      />
      <spotLight
        position={[0, 6, -6]}
        angle={0.9}
        intensity={0.1}
        castShadow={false}
      />
    </>
  )
}

function GroundAndFog() {
  return (
    <>
      <mesh rotation-x={Math.PI * -0.5} position={[0, -1.30, 0]} receiveShadow={true}>
        <planeGeometry args={[70, 70]} />
        <meshStandardMaterial color={'#ffffff'} metalness={0} roughness={0.89} />
      </mesh>
      <color attach="background" args={['#ffffff']} />
      <fog attach="fog" args={['#ffffff', 6, 14]} />
    </>
  );
}

export default function App() {

  return (
    <>
      <div className="relative w-full h-full" style={{height: 'var(--vh)'}}>
        <div
          className="relative grid grid-cols-1 md:grid-cols-2 w-full"
          style={{height: 'calc(var(--vh) - 60px)'}}
        >
          Test
          <Canvas
            className="w-full h-full cursor-move"
            shadows
          >
            <PerspectiveCamera
              fov={30}
              near={0.1}
              far={100}
              makeDefault
              position={[0, 0.786969454578296, 6.955634977391649]}
            />
            <GroundAndFog />
            <StudioSoLights />
          </Canvas>
        </div>
      </div>
    </>
  )
}
