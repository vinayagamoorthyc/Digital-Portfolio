"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei"
import { Suspense, useMemo, useRef } from "react"
import * as THREE from "three"

type HeroSceneProps = {
  bodyColor?: string
  ringColor?: string
}

function TorusKnot({
  bodyColor = "#064e3b",
  ringColor = "#f59e0b",
}: Required<HeroSceneProps>) {
  const group = useRef<THREE.Group>(null)

  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(bodyColor),
        metalness: 0.3,
        roughness: 0.07,
        envMapIntensity: 1.25,
        clearcoat: 1,
        clearcoatRoughness: 0.02,
        reflectivity: 0.9,
      }),
    [bodyColor]
  )

  useFrame((state) => {
    const g = group.current
    if (!g) return
    const t = state.clock.getElapsedTime()
    g.rotation.y = t * 0.25
    g.rotation.x = Math.sin(t * 0.15) * 0.12
  })

  return (
    <group ref={group}>
      <mesh castShadow receiveShadow>
        <torusKnotGeometry args={[0.85, 0.22, 320, 48]} />
        <meshPhysicalMaterial {...material} />
      </mesh>

      {/* Slim gold orbit ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]} position={[0, -0.02, 0]}>
        <torusGeometry args={[1.3, 0.02, 24, 256]} />
        <meshStandardMaterial
          color={ringColor}
          metalness={0.8}
          roughness={0.2}
          emissive={ringColor}
          emissiveIntensity={0.15}
        />
      </mesh>
    </group>
  )
}

export default function HeroScene({
  bodyColor = "#064e3b",
  ringColor = "#f59e0b",
}: HeroSceneProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [2.4, 1.6, 5], fov: 50, near: 0.1, far: 100 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["transparent"]} />

      <hemisphereLight intensity={0.4} groundColor={new THREE.Color("#111")} />
      <directionalLight position={[3, 4, 2]} intensity={1.2} />
      <directionalLight position={[-3, -1, -2]} intensity={0.6} />

      <Suspense fallback={null}>
        <TorusKnot bodyColor={bodyColor} ringColor={ringColor} />
        <ContactShadows position={[0, -1.05, 0]} opacity={0.22} scale={8} blur={3} far={3} />
        <Environment preset="studio" />
      </Suspense>

      {/* Free-look controls */}
      <OrbitControls
        enableZoom={false}
        enablePan
        enableRotate
        enableDamping
        dampingFactor={0.06}
        target={[0, 0, 0]}
      />
    </Canvas>
  )
}
