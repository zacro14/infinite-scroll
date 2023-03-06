import { getShips } from '@/api/ships';
import { MainPage } from '@/components/Layout';
import { CardSkeleton } from '@/components/Skeleton';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { NotFound } from './error-page';

const Ships = () => {
  const query = useInfiniteQuery({
    queryKey: ['ships'],
    queryFn: getShips,
    getNextPageParam: (lastPage, pages) => lastPage.offset,
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
        {query.data.pages.map((ship) =>
          ship.docs.map((data) => (
            <div
              key={data.id}
              className="card w-40 md:w-64 lg:w-96 bg-base-100 shadow-xl border border-slate-400"
            >
              <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <p>{data.year_built}</p>
              </div>
              <figure className={'h-52'}>
                <img src={data.image} alt={data.name} />
              </figure>
            </div>
          ))
        )}
      </div>
      <div className={'p-5 flex items-center justify-center'}>
        <button
          className={'btn'}
          onClick={() => query.fetchNextPage()}
          disabled={!query.hasNextPage || query.isFetchingNextPage}
        >
          {query.isFetchingNextPage
            ? 'Loading more...'
            : query.hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </div>
    </MainPage>
  );
};

export default Ships;
