
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    ['12249_Bird_v1']: THREE.Mesh
  }
  materials: {
    ['12249_Bird_v1']: THREE.MeshStandardMaterial
  }
}

export function Scene(props: JSX.IntrinsicElements['group']) {
  const sceneRef = useRef();
  const { nodes, materials } = useGLTF('/objects/model.gltf') as GLTFResult

  useFrame(() => {
    sceneRef.current.rotation.z += 0.1;
    sceneRef.current.position.setZ(-10);
  });

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -5]} scale={0.55}>
        <mesh geometry={nodes['12249_Bird_v1'].geometry} material={materials['12249_Bird_v1']} scale={0.4} ref={sceneRef}/>
      </group>
    </group>
  )
}

useGLTF.preload('/objects/model.gltf')
