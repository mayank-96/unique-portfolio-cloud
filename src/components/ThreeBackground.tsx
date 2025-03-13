
import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useThemeStore } from '@/stores/useThemeStore';
import * as THREE from 'three';

// Improved floating particle with better aesthetics
const FloatingParticle = ({ 
  position, 
  color, 
  seed, 
  speed = 1, 
  size = 0.3 
}: { 
  position: [number, number, number], 
  color: string, 
  seed: number, 
  speed?: number,
  size?: number 
}) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const time = useRef(seed);
  
  useFrame(() => {
    time.current += 0.01 * speed;
    
    if (mesh.current) {
      // More fluid, natural motion pattern
      mesh.current.position.x = position[0] + Math.sin(time.current) * 0.7;
      mesh.current.position.y = position[1] + Math.cos(time.current * 0.7) * 0.7;
      mesh.current.position.z = position[2] + Math.sin(time.current * 0.3) * 0.7;
      
      // Gentle rotation
      mesh.current.rotation.x += 0.002 * speed;
      mesh.current.rotation.y += 0.001 * speed;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.3} 
        metalness={0.7}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
};

// Particle field with better distribution and aesthetics
const ParticleField = () => {
  const { theme } = useThemeStore();
  const { viewport } = useThree();
  
  // Enhanced theme colors with better glow effect
  const getThemeColor = () => {
    switch (theme) {
      case 'purple': return '#b0a1f7';
      case 'ocean': return '#38bdf8';
      case 'sunset': return '#fb923c';
      default: return '#ff7291';
    }
  };
  
  // Create a more interesting particle arrangement
  const particles = Array.from({ length: 20 }, (_, i) => {
    const radius = 5 + Math.random() * 10;
    const angle = (i / 20) * Math.PI * 2; // Distribute in a circle
    const y = (Math.random() - 0.5) * viewport.height;
    
    return {
      id: i,
      position: [
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius - 5
      ] as [number, number, number],
      seed: Math.random() * 100,
      speed: 0.3 + Math.random() * 0.7,
      size: 0.1 + Math.random() * 0.4
    };
  });

  return (
    <>
      {/* Add a central glow */}
      <mesh position={[0, 0, -10]}>
        <sphereGeometry args={[4, 32, 32]} />
        <meshBasicMaterial 
          color={getThemeColor()}
          transparent
          opacity={0.05}
        />
      </mesh>
      
      {/* Render enhanced particles */}
      {particles.map((particle) => (
        <FloatingParticle 
          key={particle.id}
          position={particle.position}
          color={getThemeColor()}
          seed={particle.seed} 
          speed={particle.speed}
          size={particle.size}
        />
      ))}
    </>
  );
};

// Enhanced mouse movement effect with smoother response
const MouseMovementEffect = ({ mouseSensitivity = 0.08 }) => {
  const { camera } = useThree();
  
  useFrame(() => {
    // Get mouse position normalized to -1 to 1
    const x = (window.innerWidth / 2 - (window.mouseX || window.innerWidth / 2)) / window.innerWidth;
    const y = (window.innerHeight / 2 - (window.mouseY || window.innerHeight / 2)) / window.innerHeight;
    
    // Apply subtle camera rotation based on mouse position
    if (camera) {
      camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, y * mouseSensitivity, 0.05);
      camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, x * mouseSensitivity, 0.05);
    }
  });
  
  return null;
};

// Track mouse globally for smoother performance
if (typeof window !== 'undefined') {
  window.mouseX = window.innerWidth / 2;
  window.mouseY = window.innerHeight / 2;
  
  window.addEventListener('mousemove', (e) => {
    window.mouseX = e.clientX;
    window.mouseY = e.clientY;
  });
}

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-70">
      <Canvas 
        dpr={[1, 2]} 
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
        camera={{ position: [0, 0, 10], fov: 50 }}
      >
        <color attach="background" args={['transparent']} />
        <fog attach="fog" args={['#000', 10, 20]} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[0, 0, -5]} intensity={0.5} color="#ffffff" />
        <MouseMovementEffect mouseSensitivity={0.05} />
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
