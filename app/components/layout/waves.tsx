"use client"
import { Canvas, useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { createNoise4D } from "simplex-noise";
import Waves from "../three/waves";
import Blackhole from "../three/blackhole";

export default function WaveContainer(){
    return (
    <div className="w-screen h-full top-0 left-0 fixed -z-50">
        <Canvas className="block" camera={{position: [0,0,10000], fov: 55, far: 400000, near: 1, rotation: [0,0,0]}}>
            <fog attach="fog" color="#171717" near={1} far={350000} ></fog>
            <Waves></Waves>
            <Blackhole></Blackhole>
        </Canvas>
    </div>
  
    )
}