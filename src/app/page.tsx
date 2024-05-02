import MainHero from '@/components/hero/MainHero';
import Showcase from '@/components/product/Showcase';
// import { getUsers } from '@/server/db';
import { getDataFromApi } from './actions';
import { FeaturedProductsList } from '@/components/product/FeaturedProductsList';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BackgroundGradientAnimation } from '@/components/ui/backgroundGradientAnimation';
import Title from '@/components/ui/title';
import { Carousel } from '@/components/ui/carousel';
import { AutoplayCarousel } from '@/components/shared/AutoplayCarousel';
import { whyDayeItems } from '@/constants/whyDaye';

export default async function Home() {
  // const users = await getUsers();
  const products = await getDataFromApi();

  return (
    <main className='mt-16 lg:mt-24 '>
      <MainHero />
      <BackgroundGradientAnimation className='flex flex-col'>
        <Showcase products={products || []} />
        <Title text='Our Products' />
        <FeaturedProductsList />
        <Link
          href='/products'
          className='flex items-center justify-center mb-16'
        >
          <Button
            variant={'secondary'}
            className='uppercase bg-accent h-12 px-6'
          >
            Explore all products
          </Button>
        </Link>
        <div className='my-16 gap-8 flex flex-col w-full h-full items-center justify-center px-4'>
          <Title text='Why choose daye' />
          <AutoplayCarousel carouselItems={whyDayeItems} />
        </div>
      </BackgroundGradientAnimation>
    </main>
  );
}
