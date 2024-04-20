import { getDataFromApi } from './actions';

export default async function Home() {
  const data = await getDataFromApi();

  return <main className=''></main>;
}
