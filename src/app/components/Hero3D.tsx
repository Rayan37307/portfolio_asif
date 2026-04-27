"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef}>
        {/* Icosahedron provides a nice geometric brutalist shape */}
        <icosahedronGeometry args={[2.5, 2]} />
        <MeshDistortMaterial 
          color="#ffffff" 
          emissive="#ffffff"
          emissiveIntensity={0.8}
          roughness={0.5}
          metalness={0.2}
          distort={0.3} 
          speed={1.5} 
          wireframe={true}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-[5] pointer-events-none opacity-90">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#444444" />
        <AbstractShape />
        <Sparkles count={100} scale={12} size={1.5} speed={0.4} opacity={0.3} color="#ffffff" />
      </Canvas>
    </div>
  );
}
