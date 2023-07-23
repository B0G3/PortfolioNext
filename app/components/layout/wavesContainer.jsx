"use client"
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";

const options = {
    vertexHeight: 8000,
    planeDefinition: 80,
    planeSize: 1245000,
    meshColor: "#484848",
    camera_initial_y: 12000
}

function Waves(){
    const meshRef = useRef()
    const planeGeo = useRef();
    const [count, setCount] = useState(0);
    const [initialPositions, setInitialPositions] = useState([]);
    const [rotationXOffset, setRotationXOffset] = useState(0);
    const [rotationYOffset, setRotationYOffset] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event) => {
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

    const initPlane = useCallback(() => {
        let positions = planeGeo.current.attributes.position.array;
        let ptCout = positions.length / 3;
        for (let i = 0; i < ptCout; i++)
        {
            positions[ i * 3 + 2 ] += Math.random() * options.vertexHeight - options.vertexHeight;
        }
        planeGeo.current.attributes.position.needsUpdate = true;
        setInitialPositions([...positions]);
    })
    
    const updatePlane = useCallback(() => {
        let positions = planeGeo.current.attributes.position.array;
        let ptCout = positions.length / 3;

        for (let i = 0; i < ptCout; i++)
        {
            if(initialPositions){
                let initial_pos = initialPositions[ i * 3 + 2 ];
                positions[ i * 3 + 2 ] = Math.sin(( i + count * 0.01)) * (initial_pos - (initial_pos * 0.5));
                setCount(count + 1);
            }
    
        }
        planeGeo.current.attributes.position.needsUpdate = true;
    })

    useFrame((state, delta) => {
        let scrollOffset = window.scrollY / (document.body.offsetHeight - window.innerHeight);

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
        state.camera.position.setY(options.camera_initial_y + (scrollOffset * 110000));

        if(!initialPositions.length) initPlane();
        else updatePlane();
    })

    return (
        <mesh ref={meshRef} rotation={[-Math.PI * .5,0,0]}>
            <planeGeometry ref={planeGeo} attach="geometry" args={[options.planeSize, options.planeSize, options.planeDefinition, options.planeDefinition]}></planeGeometry>
            <meshBasicMaterial attach="material" color={options.meshColor} wireframe></meshBasicMaterial>
        </mesh>
    )
}
  

export default function WaveScreen(){
    return (
    <div className="w-screen h-full top-0 left-0 fixed -z-50">
        <Canvas className="block" camera={{position: [0,0,10000], fov: 55, far: 400000, near: 1, aspect:(window.innerWidth / window.innerHeight), rotation: [0,0,0]}}>
            <fog attach="fog" color="#171717" near={1} far={400000} ></fog>
            <Waves></Waves>
        </Canvas>
    </div>
  
    )
}