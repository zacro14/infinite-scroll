import { getShips } from '@/api/ships';
import { MainPage } from '@/components/Layout';
import { useQuery } from '@tanstack/react-query';

const Ships = () => {
  const query = useQuery({
    queryKey: ['ships'],
    queryFn: getShips,
  });

  if (query.isError) return <div>Error</div>;
  if (query.isLoading) return <div>Loading...</div>;

  return (
    <MainPage>
      <div className={'grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4'}>
        {query.data.docs.map((ship) => (
          <div
            key={ship.id}
            className="card w-40 md:w-64 lg:w-96 bg-base-100 shadow-xl border border-slate-400"
          >
            <div className="card-body">
              <h2 className="card-title">{ship.name}</h2>
              <p>{ship.year_built}</p>
            </div>
            <figure className={'h-52'}>
              <img src={ship.image} alt={ship.name} />
            </figure>
          </div>
        ))}
      </div>
    </MainPage>
  );
};

export default Ships;
