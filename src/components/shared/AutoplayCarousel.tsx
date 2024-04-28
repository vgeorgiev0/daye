'use client';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { WhyDayeItem } from '@/types/common';
import Image from 'next/image';

interface AutoplayCarouselProps {
  carouselItems: WhyDayeItem[];
}

export const AutoplayCarousel: React.FC<AutoplayCarouselProps> = ({
  carouselItems,
}) => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className='w-full max-w-screen-sm bg-foreground rounded-2xl'
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {carouselItems.map((item) => (
          <CarouselItem key={item.id}>
            <div className='w-full relative rounded-2xl'>
              <div className='w-full h-full flex items-center justify-center overflow-hidden rounded-t-2xl'>
                <Image
                  alt={`carousel-${item.title}`}
                  src={item.image}
                  width={2048}
                  height={2048}
                  className='rounded-t-2xl grayscale shadow-xl hover:grayscale-0 transition-all duration-500 ease-in-out hover:scale-105 '
                />
              </div>
            </div>
            <div>
              <h1 className='text-typography text-lg lg:text-2xl font-medium tracking-[-0.015em] font-poppins text-center pt-4'>
                {item.title}
              </h1>
              <h2 className='text-typography text-base lg:text-lg tracking-[-0.015em] font-poppins text-center pt-3'>
                {item.description}
              </h2>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
