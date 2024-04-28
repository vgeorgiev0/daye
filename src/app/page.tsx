import MainHero from '@/components/hero/MainHero';
import Showcase from '@/components/product/Showcase';
import { getUsers } from '@/server/db';
import { getDataFromApi } from './actions';
import { FeaturedProductsList } from '@/components/product/FeaturedProductsList';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BackgroundGradientAnimation } from '@/components/ui/backgroundGradientAnimation';

export default async function Home() {
  // const users = await getUsers();
  const products = await getDataFromApi();

  return (
    <main className='mt-16 lg:mt-24 '>
      <MainHero />
      <BackgroundGradientAnimation className='flex flex-col'>
        <Showcase products={products || []} />
        <div className='bg-background/40 rounded-2xl shadow-xl flex items-center justify-center p-6 w-4/5 md:w-1/2 mb-8 '>
          <h1 className='font-poppins text-xl lg:text-3xl font-bold text-typography select-none'>
            Our Products
          </h1>
        </div>
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
      </BackgroundGradientAnimation>
    </main>
  );
}
