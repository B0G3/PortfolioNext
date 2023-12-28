"use client"
import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

import { createNoise4D } from "simplex-noise";
const noise4D = createNoise4D();

const _OPTIONS = {
    vertexHeight: 8000,
    planeDefinition: 160,
    planeSize: 1000000,
    meshColor: "#484848",
    camera_initial_y: 12000
}

export default function Waves(){
    const meshRef = React.useRef<THREE.Mesh>(null)
    const [count, setCount] = React.useState(0);
    const [rotationXOffset, setRotationXOffset] = React.useState(0);
    const [rotationYOffset, setRotationYOffset] = React.useState(0);
    const v3 = new THREE.Vector3();

    React.useEffect(() => {
        const handleMouseMove = (event : MouseEvent) => {
            let maxWidth = window.innerWidth;
            let maxHeight = window.innerHeight;


            setRotationXOffset((event.clientX/maxWidth)-0.5);
            setRotationYOffset((event.clientY/maxHeight)-0.5);
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    const [planeGeometry, initialPositions] = React.useMemo(() => {
        const arr = [];
        const geometry =  new THREE.PlaneGeometry(_OPTIONS.planeSize, _OPTIONS.planeSize, _OPTIONS.planeDefinition, _OPTIONS.planeDefinition);
        const positions = geometry.attributes.position;

        for (let i = 0; i < positions.count; i++){
            v3.fromBufferAttribute(positions, i);
            arr.push(v3.clone());
        }
        return [geometry, arr];

    }, [meshRef]);

    const getNoiseValue = (vector : THREE.Vector3, time: number) => {
        let noise = 0;
        const NOISE_FREQUENCY = 50000;
        const HEIGHT = 8000
        noise = HEIGHT * noise4D(vector.x / NOISE_FREQUENCY, vector.y/ NOISE_FREQUENCY , vector.z / NOISE_FREQUENCY, time);
        noise += HEIGHT / 2 * noise4D(vector.x * NOISE_FREQUENCY * 2, vector.y * NOISE_FREQUENCY * 2, vector.z * NOISE_FREQUENCY * 2, time);

        // return Math.round(noise / 500) * 500;
        return noise;
    }

    useFrame((state, delta, xrFrame)=>{
        if(!meshRef.current?.geometry || !initialPositions) return;
        setCount(count + delta);

        const geometry = meshRef.current.geometry;
        const positions = geometry.attributes.position;
        let k = 0;
        for ( let i = 0; i < positions.count; i ++ ) {
            if(!initialPositions[i]) return;
            const noise = getNoiseValue(initialPositions[i], count * 0.25);
            v3.copy(initialPositions[i]).add(new THREE.Vector3(0,0,noise))
            // if(i === 0) console.log(noise);
            positions.setXYZ(i, v3.x, v3.y, v3.z)
        }

        geometry.attributes.position.needsUpdate = true;
    })

    useFrame((state, delta) => {
        let scrollOffset = window.scrollY / (document.body.offsetHeight - window.innerHeight) + 0.25;

        let prev_cameraRotationX = state.camera.rotation.x;
        let prev_cameraRotationY = state.camera.rotation.y;
        let prev_cameraRotationZ = state.camera.rotation.z;

    
        let cameraRotationX = (scrollOffset * -0.75) + 6 * -rotationYOffset * Math.PI / 180
        let cameraRotationY = (scrollOffset * 0.9) + 21 * -rotationXOffset * Math.PI / 180
        let cameraRotationZ = 0;
    
        // LERP
        let to_cameraRotationX = prev_cameraRotationX + (cameraRotationX - prev_cameraRotationX) * 0.1;
        let to_cameraRotationY = prev_cameraRotationY + (cameraRotationY - prev_cameraRotationY) * 0.1;
        let to_cameraRotationZ = prev_cameraRotationZ + (cameraRotationZ - prev_cameraRotationZ) * 0.1;
    
    
        state.camera.rotation.set(to_cameraRotationX, to_cameraRotationY, to_cameraRotationZ);
        state.camera.position.setY(_OPTIONS.camera_initial_y + (scrollOffset * 110000));
    })

    return (
        <mesh ref={meshRef} rotation={[-Math.PI * .5,0,0]}>
            <primitive object={planeGeometry} attach="geometry"></primitive>
            <meshBasicMaterial attach="material" color={_OPTIONS.meshColor} wireframe></meshBasicMaterial>
        </mesh>
    )
}