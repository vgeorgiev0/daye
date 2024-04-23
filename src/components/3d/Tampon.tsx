'use client';
import { TamponPack } from '@/types/tampons';
import { Html, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { ShoppingBasket } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import TamponList from './TamponList';

interface TamponProps extends GroupProps {
  pack: TamponPack | null;
}

const Tampon: React.FC<TamponProps> = (props) => {
  const { nodes, materials } = useGLTF('/tampon.glb');
  const { pack } = props;

  const totalTampons = pack?.tampons.reduce(
    (acc, tampon) => acc + tampon.amount,
    0
  );

  return (
    <group {...props} dispose={null}>
      <mesh
        //@ts-ignore
        geometry={nodes.mesh_0?.geometry}
        material={materials[0]}
      >
        <Html scale={10} rotation={[Math.PI / 2, 0, 0]} position={[0, -30, 25]}>
          <div className='select-none w-52 font-poppins text-white flex flex-col gap-2'>
            <h1 className='text-xl font-bold '>Tampons</h1>
            <p className='text-base '>
              This subscription includes the following:
            </p>
            <TamponList
              currency={pack?.currency}
              price={pack?.price}
              tampons={pack?.tampons}
            />
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
};

export default Tampon;
