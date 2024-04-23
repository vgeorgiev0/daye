'use client';
import { TamponPack } from '@/types/tampons';
import {
  ContactShadows,
  Environment,
  PresentationControls,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { memo } from 'react';
import Tampon from '../3d/Tampon';

interface ProductPageProps {
  pack: TamponPack | null;
}

const Product3D: React.FC<ProductPageProps> = ({ pack }) => {
  return (
    <div className='w-full h-screen bg-secondary mt-24'>
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-mapSize={2048}
          castShadow
        />
        <spotLight
          position={[20, 20, 20]}
          angle={0.3}
          penumbra={1}
          shadow-mapSize={2048}
          castShadow
        />

        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 2, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Tampon
            pack={pack}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[-0.5, 0, 0]}
            scale={0.05}
          />
        </PresentationControls>
        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.75}
          scale={10}
          blur={3}
          far={10}
        />
        <Environment preset='studio' />
      </Canvas>
    </div>
  );
};

export default memo(Product3D);
