import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Page404 = () => (
  <div className='my-32'>
    <div className='container relative pt-5 pb-16 lg:pb-20 lg:pt-5'>
      <header className='text-center max-w-2xl mx-auto space-y-2'>
        <span className='block text-sm text-typography font-poppins sm:text-xl tracking-wider font-medium'>
          This page does not exist
        </span>
        <div className='pt-8'>
          <Button variant={'secondary'}>
            <Link href='/'>Go back home</Link>
          </Button>
        </div>
      </header>
    </div>
  </div>
);

export default Page404;
