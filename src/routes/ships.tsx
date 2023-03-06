import { getShips } from '@/api/ships';
import { MainPage } from '@/components/Layout';
import { CardSkeleton } from '@/components/Skeleton';
import { useQuery } from '@tanstack/react-query';
import { NotFound } from './error-page';

const Ships = () => {
  const query = useQuery({
    queryKey: ['ships'],
    queryFn: getShips,
  });

  if (query.isError) return <NotFound />;
  if (query.isLoading)
    return (
      <MainPage>
        <div className={'grid grid-cols-4 gap-4'}>
          {[0, 2, 3, 4].map((item: number) => (
            <CardSkeleton key={item} />
          ))}
        </div>
      </MainPage>
    );

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
