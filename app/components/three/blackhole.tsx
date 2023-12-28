import { useFrame } from "@react-three/fiber";
import React from "react";
import { createNoise4D } from "simplex-noise";
import * as THREE from "three";
const noise4D = createNoise4D();

export default function Blackhole(){
    const [count, setCount] = React.useState(0);
    const v3 = new THREE.Vector3();
    const RADIUS = 120000

    const [geometry, startPositions] = React.useMemo(() => {
        const arr = [];
        const geometry =  new THREE.IcosahedronGeometry(RADIUS, 2);
        const positions = geometry.attributes.position;

        for (let i = 0; i < positions.count; i++){
            v3.fromBufferAttribute(positions, i).normalize();
            arr.push(v3.clone());
        }
        return [geometry, arr];

    }, []);

    useFrame((state, delta, xrFrame)=>{
        if(!geometry || !startPositions) return;
        setCount(count + delta);
        const positions = geometry.attributes.position;
    
        let k = 0;
        for ( let i = 0; i < positions.count; i ++ ) {
            if(!startPositions[i]) return;
            const noise = noise4D(startPositions[i].x, startPositions[i].y, startPositions[i].z, count / 3) * (10);
            
            v3.copy(startPositions[i]).multiplyScalar(RADIUS).addScaledVector(startPositions[i], noise * 3000);
            positions.setXYZ(i, v3.x, v3.y, v3.z)
        }

        geometry.attributes.position.needsUpdate = true;
    })

    return (<>
            <mesh position={[-180000, 220000, -1000]}>
                <primitive object={geometry} attach="geometry"></primitive>
                <meshBasicMaterial
                        color={"#0a0a0a"}
                        side={THREE.FrontSide}
                        attach="material"
                />
            </mesh>
    </>)
}