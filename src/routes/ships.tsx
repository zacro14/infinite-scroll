import { getShips } from '@/api/ships';
import { MainPage } from '@/components/Layout';
import { CardSkeleton } from '@/components/Skeleton';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { NotFound } from './error-page';

const Ships = () => {
  const query = useInfiniteQuery({
    queryKey: ['ships'],
    queryFn: getShips,
    getNextPageParam: (lastPage, pages) => lastPage.nextPage,
  });

  useEffect(() => {
    let fetching = false;

    const handleScroll = async (e: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true;
        if (query.hasNextPage) await query.fetchNextPage();
        fetching = false;
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [query.fetchNextPage, query.hasNextPage]);

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
      <div className={'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'}>
        {query.data.pages.map((ship) =>
          ship.docs.map((data) => (
            <div
              key={data.id}
              className="card w-40 md:w-64 lg:w-96 bg-base-100 hover:shadow-xl cursor-pointer"
            >
              <figure className={'h-52 rounded-t-lg'}>
                <img
                  className={'rounded-lg h-full w-full object-cover'}
                  src={data.image}
                  alt={data.name}
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <p>{data.year_built}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className={'p-5 flex items-center justify-center'}>
        {query.hasNextPage ? (
          <button className={'btn btn-circle loading'}></button>
        ) : (
          <span className={'text-slate-500'}>Nothing more here</span>
        )}
      </div>
    </MainPage>
  );
};

export default Ships;