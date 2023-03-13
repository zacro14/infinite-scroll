import { getShipDetails } from '@/api/ships';
import { MainPage } from '@/components/Layout';
import useScrollToTop from '@/utils/scrollToTop';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const ShipPage = () => {
  let { id } = useParams();
  useScrollToTop();
  const { data } = useQuery({
    queryKey: ['ship'],
    queryFn: () => getShipDetails(id),
  });

  console.log(data);
  return (
    <MainPage>
      <div className=" lg:mx-80 bg-base-100">
        <figure className={'rounded-lg h-80'}>
          <img
            className={'w-full h-full object-cover rounded-lg bg-orange-100'}
            src={data?.image}
          />
        </figure>
        <div className="card-body  px-2">
          <h2 className="card-title">{data?.name}</h2>
          <p>{data?.year_built}</p>
          <p>{data?.type}</p>

          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </MainPage>
  );
};

export default ShipPage;
