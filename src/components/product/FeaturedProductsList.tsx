'use client';
import Image from 'next/image';
import React from 'react';
import { WobbleCard } from '../ui/wobbleCard';
import diagnostic from '@/assets/diagnostic-tampon.png';
import period from '@/assets/period-pain-clinic.png';
import tampons from '@/assets/tampons.png';
import Link from 'next/link';
import { Button } from '../ui/button';

interface FeaturedProductsListProps {}

export const FeaturedProductsList: React.FC<
  FeaturedProductsListProps
> = ({}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl px-6 py-6 lg:mx-auto w-full overflow-hidden'>
      <WobbleCard
        containerClassName='col-span-1 lg:col-span-2 h-full bg-red-900 min-h-[500px] lg:min-h-[300px]'
        className=''
      >
        <div className='max-w-xs'>
          <h2 className='text-left uppercase text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
            Tampons
          </h2>
          <p className='mt-4 text-left  text-base/6 text-neutral-200'>
            Organic and hyper-absorbent, the safest tampons in the world
          </p>
        </div>
        <Link href='/products'>
          <Button variant={'link'} className='mt-10 underline'>
            Shop now
          </Button>
        </Link>
        <Image
          src={tampons}
          width={500}
          height={500}
          alt='linear demo image'
          className='absolute -right-4  grayscale filter -bottom-0 object-contain rounded-2xl'
        />
      </WobbleCard>
      <WobbleCard containerClassName='col-span-1 min-h-[300px]'>
        <h2 className='max-w-80 uppercase text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
          Diagnostic Tampon
        </h2>
        <p className='mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200'>
          Uncover gynae health risks using a non-invasive tampon sample
        </p>
        <Link href='/products'>
          <Button variant={'link'} className='mt-10 underline'>
            Shop now
          </Button>
        </Link>
        <Image
          src={diagnostic}
          width={500}
          height={500}
          alt='linear demo image'
          className='absolute lg:hidden -right-4 filter -bottom-16 object-contain rounded-2xl'
        />
      </WobbleCard>
      <WobbleCard containerClassName='col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]'>
        <div className='max-w-sm'>
          <h2 className='max-w-sm md:max-w-lg uppercase text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
            Period pain clinic
          </h2>
          <p className='mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200'>
            Get a personalized pain relief routine
          </p>
          <Link href='/products'>
            <Button variant={'link'} className='mt-10 underline'>
              Shop now
            </Button>
          </Link>
        </div>
        <Image
          src={period}
          width={500}
          height={500}
          alt='linear demo image'
          className='absolute -right-10 -bottom-10 object-contain rounded-2xl'
        />
      </WobbleCard>
    </div>
  );
};
