import { baseApi } from '@/api';
import { Card } from '@/components/Card';
import { MainPage } from '@/components/Layout';
import { Hero } from '@/components/Root';
import Ships from '@/components/Root/Ships';
import { Fetcher } from '@/utils';
import { useQuery } from '@tanstack/react-query';

function Root() {
  return (
    <div className="App">
      <MainPage>
        <Hero />
        <Ships />
      </MainPage>
    </div>
  );
}

export default Root;
