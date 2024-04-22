import Image from 'next/image';
import { getDataFromApi } from './actions';
import { getUsers } from '@/server/db';
import { ncNanoId } from '@/lib/utils';
import MainHero from '@/components/hero/MainHero';

export const dynamic = 'force-dynamic';
// Makes sure that the data is fetched at runtime

export default async function Home() {
  const data = await getDataFromApi();
  const users = await getUsers();

  return (
    <main className='mt-8 lg:mt-24'>
      <MainHero />
      {/* {users.map((user) => (
        <div key={ncNanoId()} className=''>
          <h1 className=''>{user.name}</h1>
          <p className=''>{user.email}</p>
          {user.cart?.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      ))}
      {data?.map((item, index) => (
        <div key={ncNanoId()} className=''>
          <h1 className=''>{item.currency}</h1>
          <p className=''>{item.price}</p>
          <Image
            src={item?.productImage}
            alt={`tampon-${item.price}-${item.currency}`}
            width={1000}
            height={1000}
          />
        </div>
      ))} */}
    </main>
  );
}
