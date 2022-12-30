
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

type GLTFResult = GLTF & {
  nodes: {
    ['12249_Bird_v1']: THREE.Mesh
  }
  materials: {
    ['12249_Bird_v1']: THREE.MeshStandardMaterial
  }
}

export function Scene(props: JSX.IntrinsicElements['group']) {
  const sceneRef = useRef<Mesh>(null!);
  const { nodes, materials } = useGLTF('/objects/model.gltf');

  useFrame(() => {
    if(sceneRef){
      const node = sceneRef.current;
      const nodeRotation = node?.rotation;
      nodeRotation.z += 0.1;
      node?.position.setZ(-10);
    }
  });
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -5]} scale={0.55}>
        <mesh castShadow receiveShadow  geometry={(nodes['12249_Bird_v1'] as THREE.Mesh).geometry} material={materials['12249_Bird_v1']} scale={0.4} ref={sceneRef}/>
      </group>
    </group>
  )
}

useGLTF.preload('/objects/model.gltf')
