'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import {
  useGLTF,
  PresentationControls,
  Environment,
  ContactShadows,
  Html,
} from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { ShoppingBasket } from 'lucide-react';

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  function Tampon(props: any) {
    const { nodes, materials } = useGLTF('/tampon.glb');
    return (
      <group {...props} dispose={null}>
        {/* @ts-ignore */}
        <mesh geometry={nodes.mesh_0?.geometry} material={materials[0]}>
          <Html
            scale={10}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, -30, 25]}
            // transform
          >
            <div className='select-none w-40 flex flex-col gap-4'>
              <h1 className='text-xl font-bold text-white'>
                Tampon - {params.id}
              </h1>
              <p className='text-base text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ultrices, nunc id ultrices.
              </p>
              <Button
                className='flex items-center justify-around'
                variant={'secondary'}
              >
                <ShoppingBasket height={16} />
                Add to cart
              </Button>
            </div>
          </Html>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.mesh_0.geometry}
          material={materials[0]}
        />
      </group>
    );
  }
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
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Tampon
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
        <Environment preset='city' />
      </Canvas>
    </div>
  );
};

export default ProductPage;
