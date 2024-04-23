import MainHero from '@/components/hero/MainHero';
import { getUsers } from '@/server/db';

export const dynamic = 'force-dynamic';
// Makes sure that the data is fetched at runtime

export default async function Home() {
  const users = await getUsers();

  return (
    <main className='mt-8 lg:mt-24'>
      <MainHero />
    </main>
  );
}
