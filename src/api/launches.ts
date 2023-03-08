import { Fetcher } from '@/utils';
import { baseApi as API } from './baseUrl';

type Launch = {
  docs: {
    fairings: {
      reused: boolean;
      recovery_attempt: boolean;
      recovered: boolean;
      ships: string[];
    };
    links: {
      patch: {
        small: string;
        large: string;
      };
      reddit: {
        campaign: string;
        launch: string;
        media: string;
        recovery: string | null;
      };
      flickr: {
        small: string[];
        original: string[];
      };
      presskit: string;
      webcast: string;
      youtube_id: string;
      article: string;
      wikipedia: string;
    };
    static_fire_date_utc: string;
    static_fire_date_unix: number;
    tdb: boolean;
    net: boolean;
    window: number;
    rocket: string;
    success: boolean;
    failures: any[];
    details: string;
    crew: any[];
    ships: string[];
    capsules: any[];
    payloads: string[];
    launchpad: string;
    auto_update: boolean;
    flight_number: number;
    name: string;
    date_utc: string;
    date_unix: number;
    date_local: string;
    date_precision: string;
    upcoming: boolean;
    cores: {
      core: string;
      flight: number;
      gridfins: boolean;
      legs: boolean;
      reused: boolean;
      landing_attempt: boolean;
      landing_success: boolean;
      landing_type: string;
      landpad: string;
    }[];
    id: string;
  }[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
};

export async function launches({ pageParam = 1 }): Promise<Launch> {
  const ships = await Fetcher(`${API}/launches/query`, {
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
  return ships as Launch;
}
