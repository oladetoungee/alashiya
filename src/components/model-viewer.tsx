"use client";

import { Bounds, Center, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";
import type { Model3D } from "@/lib/models";

function PlaceholderMesh({ shape }: { shape: Model3D["shape"] }) {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x += dt * 0.25;
    ref.current.rotation.y += dt * 0.35;
  });

  return (
    <mesh ref={ref}>
      {shape === "icosahedron" && <icosahedronGeometry args={[1.3, 0]} />}
      {shape === "octahedron" && <octahedronGeometry args={[1.4, 0]} />}
      {shape === "knot" && <torusKnotGeometry args={[0.8, 0.3, 128, 16]} />}
      {(shape === "torus" || !shape) && (
        <torusGeometry args={[1, 0.4, 32, 100]} />
      )}
      <meshStandardMaterial color="#D57800" metalness={0.35} roughness={0.35} />
    </mesh>
  );
}

function GLTFMesh({ src }: { src: string }) {
  const { scene } = useGLTF(src);
  return <primitive object={scene} />;
}

export function ModelViewer({ model }: { model: Model3D }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 5]} intensity={1.2} />
      <directionalLight position={[-3, -2, -4]} intensity={0.4} />
      <Suspense fallback={null}>
        {model.src ? (
          <Bounds fit clip observe margin={1.4}>
            <Center>
              <GLTFMesh src={model.src} />
            </Center>
          </Bounds>
        ) : (
          <PlaceholderMesh shape={model.shape} />
        )}
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
      />
    </Canvas>
  );
}
