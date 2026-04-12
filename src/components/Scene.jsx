import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Environment, ContactShadows, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

/* ── Procedural Defender-style SUV built from boxes + cylinders ── */
const DefenderCar = ({ mouse }) => {
  const groupRef = useRef();

  // Colors
  const bodyColor = '#1a1a2e';
  const accentColor = '#3b82f6';
  const glassColor = '#0f4c81';
  const wheelColor = '#111111';
  const tireColor = '#222222';
  const metalColor = '#555555';

  // Shared materials
  const bodyMat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: bodyColor,
    metalness: 0.8,
    roughness: 0.25,
    clearcoat: 1,
    clearcoatRoughness: 0.05,
  }), []);

  const glassMat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: glassColor,
    metalness: 0.1,
    roughness: 0,
    transmission: 0.6,
    transparent: true,
    opacity: 0.7,
  }), []);

  const wheelMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: wheelColor,
    metalness: 0.9,
    roughness: 0.3,
  }), []);

  const tireMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: tireColor,
    roughness: 0.9,
  }), []);

  const accentMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: accentColor,
    emissive: accentColor,
    emissiveIntensity: 0.5,
    metalness: 0.5,
    roughness: 0.3,
  }), []);

  const metalMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: metalColor,
    metalness: 0.95,
    roughness: 0.15,
  }), []);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      // Smooth mouse follow rotation
      const targetY = mouse.current.x * 0.6;
      const targetX = mouse.current.y * 0.15;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
      // Gentle floating
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.08;
    }
  });

  const Wheel = ({ position }) => (
    <group position={position} rotation={[0, 0, Math.PI / 2]}>
      {/* Tire */}
      <mesh material={tireMat}>
        <torusGeometry args={[0.32, 0.14, 16, 32]} />
      </mesh>
      {/* Rim */}
      <mesh material={wheelMat}>
        <cylinderGeometry args={[0.22, 0.22, 0.2, 24]} />
      </mesh>
      {/* Rim accent */}
      <mesh material={accentMat}>
        <cylinderGeometry args={[0.08, 0.08, 0.22, 12]} />
      </mesh>
    </group>
  );

  return (
    <group ref={groupRef} scale={[1.1, 1.1, 1.1]} position={[0, -0.3, 0]}>
      {/* ── Main body (lower) ── */}
      <mesh position={[0, 0.45, 0]} material={bodyMat}>
        <boxGeometry args={[3.8, 0.7, 1.7]} />
      </mesh>

      {/* ── Upper body / cabin ── */}
      <mesh position={[0.15, 1.05, 0]} material={bodyMat}>
        <boxGeometry args={[2.2, 0.65, 1.6]} />
      </mesh>

      {/* ── Roof ── */}
      <mesh position={[0.15, 1.42, 0]} material={metalMat}>
        <boxGeometry args={[2.1, 0.06, 1.55]} />
      </mesh>

      {/* ── Roof rack ── */}
      <mesh position={[0.15, 1.5, 0]} material={metalMat}>
        <boxGeometry args={[1.6, 0.04, 1.2]} />
      </mesh>
      {/* Rack bars */}
      {[-0.5, 0, 0.5].map((x, i) => (
        <mesh key={i} position={[x + 0.15, 1.48, 0]} material={metalMat}>
          <boxGeometry args={[0.04, 0.06, 1.3]} />
        </mesh>
      ))}

      {/* ── Front windshield ── */}
      <mesh position={[-0.85, 1.0, 0]} rotation={[0, 0, 0.25]} material={glassMat}>
        <boxGeometry args={[0.06, 0.55, 1.4]} />
      </mesh>

      {/* ── Rear windshield ── */}
      <mesh position={[1.15, 1.0, 0]} rotation={[0, 0, -0.2]} material={glassMat}>
        <boxGeometry args={[0.06, 0.5, 1.4]} />
      </mesh>

      {/* ── Side windows (left) ── */}
      <mesh position={[0.15, 1.05, 0.81]} material={glassMat}>
        <boxGeometry args={[1.8, 0.45, 0.04]} />
      </mesh>

      {/* ── Side windows (right) ── */}
      <mesh position={[0.15, 1.05, -0.81]} material={glassMat}>
        <boxGeometry args={[1.8, 0.45, 0.04]} />
      </mesh>

      {/* ── Front bumper ── */}
      <mesh position={[-1.95, 0.3, 0]} material={metalMat}>
        <boxGeometry args={[0.15, 0.35, 1.75]} />
      </mesh>

      {/* ── Front grille ── */}
      <mesh position={[-1.93, 0.55, 0]} material={bodyMat}>
        <boxGeometry args={[0.1, 0.25, 1.3]} />
      </mesh>

      {/* ── Headlights ── */}
      {[0.65, -0.65].map((z, i) => (
        <mesh key={`hl-${i}`} position={[-1.95, 0.6, z]}>
          <boxGeometry args={[0.08, 0.12, 0.25]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
        </mesh>
      ))}

      {/* ── Tail lights ── */}
      {[0.7, -0.7].map((z, i) => (
        <mesh key={`tl-${i}`} position={[1.92, 0.55, z]}>
          <boxGeometry args={[0.06, 0.15, 0.2]} />
          <meshStandardMaterial color="#ff2200" emissive="#ff2200" emissiveIntensity={1.5} />
        </mesh>
      ))}

      {/* ── Rear bumper ── */}
      <mesh position={[1.95, 0.3, 0]} material={metalMat}>
        <boxGeometry args={[0.12, 0.35, 1.75]} />
      </mesh>

      {/* ── Wheel arches ── */}
      {/* Front left */}
      <mesh position={[-1.2, 0.2, 0.85]} material={bodyMat}>
        <boxGeometry args={[0.7, 0.5, 0.15]} />
      </mesh>
      {/* Front right */}
      <mesh position={[-1.2, 0.2, -0.85]} material={bodyMat}>
        <boxGeometry args={[0.7, 0.5, 0.15]} />
      </mesh>
      {/* Rear left */}
      <mesh position={[1.2, 0.2, 0.85]} material={bodyMat}>
        <boxGeometry args={[0.7, 0.5, 0.15]} />
      </mesh>
      {/* Rear right */}
      <mesh position={[1.2, 0.2, -0.85]} material={bodyMat}>
        <boxGeometry args={[0.7, 0.5, 0.15]} />
      </mesh>

      {/* ── Wheels ── */}
      <Wheel position={[-1.2, 0.0, 0.95]} />
      <Wheel position={[-1.2, 0.0, -0.95]} />
      <Wheel position={[1.2, 0.0, 0.95]} />
      <Wheel position={[1.2, 0.0, -0.95]} />

      {/* ── Under-body accent glow ── */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[3.2, 0.02, 1.3]} />
        <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.3} transparent opacity={0.4} />
      </mesh>

      {/* ── Side steps ── */}
      <mesh position={[0, 0.12, 0.88]} material={metalMat}>
        <boxGeometry args={[2.0, 0.04, 0.12]} />
      </mesh>
      <mesh position={[0, 0.12, -0.88]} material={metalMat}>
        <boxGeometry args={[2.0, 0.04, 0.12]} />
      </mesh>
    </group>
  );
};

/* ── Particles floating in the background ── */
const Particles = () => {
  const count = 200;
  const mesh = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#3b82f6" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

export const Scene = ({ mouse }) => {
  return (
    <>
      <color attach="background" args={['#09090b']} />

      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} penumbra={1} intensity={2} color="#ffffff" />
      <spotLight position={[-10, 5, -10]} penumbra={1} intensity={1} color="#3b82f6" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#3b82f6" />

      <Particles />
      <DefenderCar mouse={mouse} />

      <Environment resolution={256}>
        <group rotation={[-Math.PI / 4, -0.3, 0]}>
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
        </group>
      </Environment>

      <ContactShadows resolution={512} scale={20} position={[0, -0.8, 0]} blur={2.5} opacity={0.4} far={10} color="#000000" />
    </>
  );
};

export default Scene;
