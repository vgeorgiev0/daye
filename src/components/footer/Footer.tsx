'use client';

import { CustomLink } from '@/types/common';
import React from 'react';
import FooterMenuItem from './FooterMenuItem';
import FooterNav from './FooterNav';
import Image from 'next/image';
import logo from '@/assets/logo.svg';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { footerMenuItems } from '@/constants/footer';


export interface WidgetFooterMenu {
  id: string;
  menus: CustomLink[];
}

const Footer: React.FC = () => {
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const userEmail = (e.target as HTMLFormElement)['email'].value;
    // const existingUser = await getUserByEmail(userEmail);
    // Logic to check if user exists and submit a new user if not
  };

  return (
    <>
      <FooterNav />
      <div className='relative border-t border-green-200 text-white bg-secondary'>
        <div className='container flex flex-col lg:flex-row items-center justify-between gap-10 py-10'>
          <div className='flex items-center flex-nowrap gap-2 max-w-64 text-sm text-primary flex-row'>
            <Image src={logo} alt='logo' width={60} height={60} />
            <p>
              © 2024 Daye Limited The Biscuit Factory 100 Drummond Road London,
              SE16 4DG, UK
            </p>
          </div>
          <div className='flex flex-row gap-16 font-poppins'>
            {footerMenuItems.map((item, index) =>
              FooterMenuItem({ index, menu: item })
            )}
          </div>
          <div className='flex flex-col items-center justify-center font-poppins gap-2 max-w-64'>
            <p>
              Subscribe to our newsletter and get 15% off your first purchase!
            </p>
            <form onSubmit={handleFormSubmit} className='flex flex-col gap-2'>
              <Input name='email' id='email' placeholder='Email Address' />
              <div className='flex flex-row gap-2 w-full '>
                <Input
                  name='name'
                  id='name'
                  placeholder='Name'
                  className='text-typography'
                />
                <Button
                  type='submit'
                  className='text-secondary bg-[#7d854b] text-sm font-saira font-medium'
                >
                  SIGN UP
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className='flex items-center justify-center w-full bg-primary text-secondary px-4 lg:px-24 py-10 mb-10 lg:mb-0 text-center text-sm font-poppins'>
          <p>
            Daye tampons are manufactured in accordance with medical device
            standards, including ISO13485 and GMP. In order for a diagnosis to
            be confirmed, test results from the Diagnostic Tampon should be
            considered by a licensed healthcare provider alongside a
            patient&apos;s symptoms and medical history. Like every other
            diagnostic test, lab results are not sufficient for a diagnosis.
            Daye offers customers the option to connect with independent
            CQC-regulated healthcare providers virtually and in-person for a
            confirmed diagnosis. All prescriptions and treatments provided
            through the Daye platform are issued by third-party, independent
            pharmacists, who are also regulated under CQC and GPhC.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
