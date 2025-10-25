'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BookScene from './ui/BookScene';

const Jelovnik3D = () => {
  return (
    <div className="h-[95vh] w-full bg-white mb-[50px]">
      <Canvas
        shadows
        camera={{ position: [0, 0, 4.5], fov: 60 }}
        style={{ background: '#f5f5f5'}}
      >
        {/* Svetlo */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <hemisphereLight intensity={0.3} groundColor="#ccc" />

        {/* Knjiga */}
        <BookScene />

        {/* Rotacija mišem, bez zumiranja */}
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Jelovnik3D;
