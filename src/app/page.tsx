import MainHero from '@/components/hero/MainHero';
import { getUsers } from '@/server/db';


export default async function Home() {
  // const users = await getUsers();

  return (
    <main className='mt-16 lg:mt-24'>
      <MainHero />
    </main>
  );
}
