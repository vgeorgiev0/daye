import { Metadata } from 'next';
import React from 'react';

interface layoutProps {
  children?: React.ReactNode;
}
export const metadata: Metadata = {
  title: 'VG Daye - Products',
  description:
    'A list of all tampon pack subscriptions available for purchase.',
};

const layout: React.FC<layoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default layout;
