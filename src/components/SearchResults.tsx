import { ReactElement, useMemo } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { Profile } from '../models/profile';
import { pageSize } from '../reducers/findProfessionals';
import { SearchResult } from './SearchResult';

type Props = {
  profiles: Array<Partial<Profile>>;
  pageCount: number;
  page: number;
  increment: () => void;
  decrement: () => void;
  setPage: (page: number) => void;
  maxPages?: number;
};

export const SearchResults = ({ profiles, pageCount, page, increment, decrement, setPage, maxPages = 5 }: Props): ReactElement | null => {

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

      {pageCount > 1 && (
        <>
          <p>Showing results {(page * pageSize) + 1} to {Math.min((page + 1) * pageSize, total)}</p>
          <div className="mb-4">
            <PageButtons page={page} pages={pages} increment={increment} decrement={decrement} setPage={setPage} />
          </div>
        </>
      )}

      {profiles.filter((p, i) => i >= page * pageSize && i < (page + 1) * pageSize).map(p => <SearchResult key={p.id} profile={p} />)}

      {pageCount > 1 && <PageButtons page={page} pages={pages} increment={increment} decrement={decrement} setPage={setPage} />}
    </>
  );
};

type PageButtonsProps = {
  page: number;
  pages: number[];
  increment: () => void;
  decrement: () => void;
  setPage: (page: number) => void;
};

const PageButtons = ({ page, pages, increment, decrement, setPage }: PageButtonsProps): ReactElement => (
  <>
    <button className="btn btn-primary-dark btn-sm" onClick={decrement}><IoIosArrowBack /></button>
    {pages.map(i => (
      <button key={i} className={'btn btn-sm ' + (i === page ? 'btn-gray' : 'btn-primary')} onClick={() => setPage(i)}>{i + 1}</button>
    ))}
    <button className="btn btn-primary-dark btn-sm" onClick={increment}><IoIosArrowForward /></button>
    <style jsx>{`
      button { border-radius: .25rem; padding-left: 0; padding-right: 0; margin-right: 2px; width: 40px }
    `}</style>
  </>
);
