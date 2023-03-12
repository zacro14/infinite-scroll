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

  return (
    <MainPage>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{data?.name}</h2>
          <p>{data?.year_built}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </MainPage>
  );
};

export default ShipPage;
