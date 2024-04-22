import Image from 'next/image';
import { getDataFromApi } from './actions';
import { getUsers } from '@/server/db';
import { ncNanoId } from '@/lib/utils';

export default async function Home() {
  const data = await getDataFromApi();
  const users = await getUsers();
  // console.log(users, 'users');

  return (
    <main className=''>
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
      ))}
    </main>
  );
}
