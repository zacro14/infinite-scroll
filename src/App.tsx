import { useQuery } from '@tanstack/react-query';
import { baseApi } from './api';
import { Card } from './components/card';
import { MainPage } from './components/layout';
import { Fetcher } from './utils';

type Ships = {
  legacy_id: string;
  model: null;
  type: string;
  roles: string[];
  imo: number;
  mmsi: number;
  abs: number;
  class: number;
  mass_kg: number;
  mass_lbs: number;
  year_built: number;
  home_port: string;
  status: string;
  speed_kn: number | null;
  course_deg: number | null;
  latitude: number | null;
  longitude: number | null;
  last_ais_update: string | null;
  link: string;
  image: string;
  launches: string[];
  name: string;
  active: boolean;
  id: string;
};

function App() {
  async function getShips(): Promise<Ships[] | unknown> {
    const ships = await Fetcher(`${baseApi}/ships`, { json: true });
    return ships;
  }
  const query = useQuery({
    queryKey: ['ships'],
    queryFn: getShips,
  });

  if (query.isError) return <div>'Error'</div>;
  if (query.isLoading) return <div>'Loading...';</div>;

  return (
    <div className="App">
      <MainPage>
        {query.data?.map((ship: Ships) => (
          <Card title={ship.name} key={ship.id}>
            <div className="h-48 w-96 rounded-lg overflow-hidden">
              <img
                className={'h-full w-full'}
                src={ship.image}
                alt={ship.name}
              />
            </div>
            <pre>{ship.year_built}</pre>
          </Card>
        ))}
      </MainPage>
    </div>
  );
}

export default App;
