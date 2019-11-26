import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { useEffect, useState } from 'react';
import { Profile } from '../models/profile';
import { SearchResult } from './search-result';

import { usePage } from '../hooks/usePage';

interface Props {
  profiles: Profile[];
  pageSize?: number;
  maxPages?: number;
}

export const SearchResults: React.FC<Props> = ({ profiles, pageSize = 10, maxPages = 5 }) => {
  const total = profiles.length;
  const pageCount = Math.ceil(profiles.length / pageSize);

  const [ page, pages, incrementPage, decrementPage, setPage, setPageCount ] = usePage(pageCount, maxPages, 0);

  useEffect(() => {
    setPageCount(Math.ceil(profiles.length / pageSize));
    setPage(0);
  }, [ profiles, pageSize ]);

  return (
    <>
      <h2>Search Results</h2>
      <p className="lead mb-2">{total === 0 ? 'No' : total} matches found</p>
      {pageCount > 1
        ? (
          <>
            <p>Showing results {page * pageSize + 1} to {Math.min((page + 1) * pageSize, total)}</p>
            <div className="mb-4">
              <button className="btn btn-primary-dark btn-sm" onClick={() => decrementPage()}><IoIosArrowBack /></button>
              {pages.map(i => (
                // tslint:disable:jsx-key
                <button className={'btn btn-sm ' + (i === page ? 'btn-gray' : 'btn-primary')} onClick={() => setPage(i)}>{i + 1}</button>
              ))}
              <button className="btn btn-primary-dark btn-sm" onClick={() => incrementPage()}><IoIosArrowForward /></button>
            </div>
          </>
        )
        : null
      }
      {profiles.filter((p, i) => i >= page * pageSize && i < (page + 1) * pageSize).map(p => <SearchResult key={p.id} profile={p} />)}

      {pageCount > 1
        ? (
          <>
            <button className="btn btn-primary-dark btn-sm" onClick={() => decrementPage()}><IoIosArrowBack /></button>
            {pages.map(i => (
              // tslint:disable:jsx-key
              <button className={'btn btn-sm ' + (i === page ? 'btn-gray' : 'btn-primary')} onClick={() => setPage(i)}>{i + 1}</button>
            ))}
            <button className="btn btn-primary-dark btn-sm" onClick={() => incrementPage()}><IoIosArrowForward /></button>
          </>
        )
        : null
      }

      <style jsx>{`
      button { border-radius: .25rem; padding-left: 0; padding-right: 0; margin-right: 2px; width: 40px }
      `}</style>
    </>
  );
};
