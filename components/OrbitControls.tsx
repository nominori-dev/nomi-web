import { extend, useThree} from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({OrbitControls});

export default function Control(props: any) {
    const { camera, gl } = useThree();
    return <orbitControls attach={"orbitControls"}  args={[camera, gl.domElement]} />;
  }