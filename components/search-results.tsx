import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { useEffect } from 'react';
import { usePage } from '../hooks/usePage';
import { Profile } from '../models/profile';
import { SearchResult } from './search-result';

interface Props {
  profiles: Profile[];
  pageSize?: number;
}

export const SearchResults: React.FC<Props> = ({ profiles, pageSize = 15 }) => {
  const total = profiles.length;
  const [ page, incrementPage, decrementPage, setPage ] = usePage(Math.ceil(total / pageSize) - 1, 0);

  useEffect(() => {
    setPage(0);
  }, [ profiles ]);

  return (
    <>
      <h2>Search Results</h2>
      <p className="lead mb-4">{total === 0 ? 'No' : total} matches found</p>
      <button className="btn btn-primary" onClick={() => decrementPage()}><IoIosArrowBack /></button>
      <button className="btn btn-primary" onClick={() => incrementPage()}><IoIosArrowForward /></button>
      {total > 0
        ? (
          <p>Showing results {page * pageSize + 1} to {Math.min((page + 1) * pageSize, total)}</p>
        )
        : null
      }
      {profiles.filter((p, i) => i >= page * pageSize && i < (page + 1) * pageSize).map(p => <SearchResult key={p.id} profile={p} />)}

      <style jsx>{`
      button { border-radius: .25rem; padding-left: 0; padding-right: 0; margin-right: 2px; width: 40px }
      `}</style>
    </>
  );
};
