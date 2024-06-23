/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/scene.gltf 
Author: Mnostva (https://sketchfab.com/mnostva)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/office-room-15-low-poly-3d-model-0402e7c67e0e4a6abc51a7269f59600a
Title: Office Room 15 Low-poly 3D model
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Office(props) {
  const { nodes, materials } = useGLTF("models/scene.glb");
  return (
    <group
      {...props}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.lambert2SG}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.lambert2SG}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.lambert2SG}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/scene.glb");
