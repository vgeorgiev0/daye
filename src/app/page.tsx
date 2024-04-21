import Image from 'next/image';
import { getDataFromApi } from './actions';

export default async function Home() {
  const data = await getDataFromApi();

  return (
    <main className=''>
      {data?.map((item, index) => (
        <div key={index} className=''>
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
