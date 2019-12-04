import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useSelector } from 'react-redux';

import { useEffect, useMemo } from 'react';
import { pageSize, State, store } from '../store';
import { SearchResult } from './search-result';

interface Props {
  maxPages?: number;
}

export const SearchResults: React.FC<Props> = ({ maxPages = 5 }) => {
  const profiles = useSelector((state: State) => state.profiles);
  const pageCount = useSelector((state: State) => state.pageCount);
  const page = useSelector((state: State) => state.page);

  const pages = useMemo<number[]>(() => {
    const newPages = [];
    if (pageCount > 2) {
      const midPoint = Math.ceil(maxPages / 2);
      let startPage: number;
      let endPage: number;
      if (page < midPoint) { // near the start--show the first few pages
        startPage = 0;
        endPage = Math.min(maxPages, pageCount) - 1;
      } else if (page >= pageCount - midPoint) { // near the end--show the last few pages
        startPage = pageCount - Math.min(maxPages, pageCount);
        endPage = pageCount - 1;
      } else { // in between--show some pages from the middle
        startPage = page - midPoint + 1;
        endPage = Math.min(maxPages, pageCount) + page - midPoint;
      }
      for (let i = startPage; i <= endPage; i++) {
        newPages.push(i);
      }
    }
    return newPages;
  }, [ pageCount, page, maxPages ]);

  if (!profiles) {
    return null;
  }

  const total = profiles.length;

  return (
    <>
      <h2>Search Results</h2>
      <p className="lead mb-2">{total === 0 ? 'No' : total} matches found</p>
      {pageCount > 1
        ? (
          <>
            <p>Showing results {page * pageSize + 1} to {Math.min((page + 1) * pageSize, total)}</p>
            <div className="mb-4">
              <button className="btn btn-primary-dark btn-sm" onClick={() => store.dispatch({ type: 'DECREMENT_PAGE' })}><IoIosArrowBack /></button>
              {pages.map(i => (
                // tslint:disable:jsx-key (we want all the elements to be replaced, not updated)
                <button className={'btn btn-sm ' + (i === page ? 'btn-gray' : 'btn-primary')} onClick={() => store.dispatch({ type: 'SET_PAGE', payload: i })}>{i + 1}</button>
              ))}
              <button className="btn btn-primary-dark btn-sm" onClick={() => store.dispatch({ type: 'INCREMENT_PAGE' })}><IoIosArrowForward /></button>
            </div>
          </>
        )
        : null
      }
      {profiles.filter((p, i) => i >= page * pageSize && i < (page + 1) * pageSize).map(p => <SearchResult key={p.id} profile={p} />)}

      {pageCount > 1
        ? (
          <>
            <button className="btn btn-primary-dark btn-sm" onClick={() => store.dispatch({ type: 'DECREMENT_PAGE' })}><IoIosArrowBack /></button>
            {pages.map(i => (
              // tslint:disable:jsx-key (we want all the elements to be replaced, not updated)
              <button className={'btn btn-sm ' + (i === page ? 'btn-gray' : 'btn-primary')} onClick={() => store.dispatch({ type: 'SET_PAGE', payload: i })}>{i + 1}</button>
            ))}
            <button className="btn btn-primary-dark btn-sm" onClick={() => store.dispatch({ type: 'INCREMENT_PAGE' })}><IoIosArrowForward /></button>
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
