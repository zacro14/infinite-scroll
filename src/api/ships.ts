import { baseApi as API } from './baseUrl';
import { Fetcher } from '@/utils';

export type ShipsData = {
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

export type Ships = {
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

export async function getShips({ pageParam = 1 }): Promise<Ships> {
  const ships = await Fetcher(`${API}/ships/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: {},
      options: {
        page: pageParam,
      },
    }),
  });
  return ships as Ships;
}
