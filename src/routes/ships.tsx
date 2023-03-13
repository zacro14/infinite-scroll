import { getShips } from '@/api/ships';
import { MainPage } from '@/components/Layout';
import { CardSkeleton } from '@/components/Skeleton';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NotFound } from './error-page';

const Ships = () => {
  const query = useInfiniteQuery({
    queryKey: ['ships'],
    queryFn: getShips,
    getNextPageParam: (lastPage) => lastPage.nextPage,
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
    <>
      <div className={'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'}>
        {query.data.pages?.map((ship) =>
          ship.docs.map((data) => (
            <Link key={data.id} to={`/service/ships/${data.id}`}>
              <div className="card w-40 md:w-64 lg:w-96 bg-base-100 cursor-pointer">
                <figure className={'h-52 rounded-lg'}>
                  <img
                    className={'rounded-lg h-full w-full object-cover'}
                    src={data.image}
                    alt={data.name}
                  />
                </figure>

                <div className="card-body p-5">
                  <h2 className="card-title">{data.name}</h2>
                  <p>{data.year_built}</p>
                  <div className="flex gap-2">
                    {data.roles.map((role) => (
                      <span className="badge badge-lg truncate">{role}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      <div className={'p-5 flex items-center justify-center'}>
        {query.hasNextPage ? (
          <button className={'btn btn-circle loading'}></button>
        ) : (
          <p className={'text-slate-400 pt-10 font-normal'}>No more content</p>
        )}
      </div>
    </>
  );
};

export default Ships;
