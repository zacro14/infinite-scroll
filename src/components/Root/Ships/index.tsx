import { getShips, ShipsData } from '@/api/ships';
import { MainPage } from '@/components/Layout';
import { CardSkeleton } from '@/components/Skeleton';
import { Routes } from '@/constant';
import { NotFound } from '@/routes/error-page';
import { useQuery } from '@tanstack/react-query';

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
    <section className="my-5">
      <div className="flex justify-between align-middle">
        <h1 className="font-bold text-2xl">Ships for Space x</h1>
        <a className={'link'} href={Routes.Ships.path}>
          See All
        </a>
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
