import { baseApi as API } from '@/api';
import { Routes } from '@/constant';
import { Fetcher } from '@/utils';
import { useQuery } from '@tanstack/react-query';

type ShipsData = {
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

type Ships = {
  docs: ShipsData[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number;
};
const Ships = () => {
  async function getShips(): Promise<Ships> {
    const ships = await Fetcher(`${API}/ships/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: {},
        options: {},
      }),
    });
    return ships as Ships;
  }
  const query = useQuery({
    queryKey: ['ships'],
    queryFn: getShips,
  });

  if (query.isError) return <div>Error</div>;
  if (query.isLoading) return <div>Loading...</div>;
  return (
    <section className="my-5">
      <div className="flex justify-between align-middle">
        <h1 className="font-bold text-2xl">Ships for Space x</h1>
        <a href={Routes.Ships.path}>See All</a>
      </div>
      <div className="snap-x flex container overflow-x-auto pt-5 h-96 mx-auto">
        {query.data?.docs.map((ship: ShipsData) => {
          return (
            <div key={ship.id} className="snap-center mx-3 w-96">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{ship.name}</h2>
                  <p>{ship.status}</p>
                </div>
                <figure className={'h-48'}>
                  <img
                    src={ship.image}
                    alt={ship.name}
                    className={'object-cover'}
                  />
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Ships;
