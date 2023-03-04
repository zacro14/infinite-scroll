import { MainPage } from '@/components/Layout';
import { Hero } from '@/components/Root';
import Ships from '@/components/Root/Ships';

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
