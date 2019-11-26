import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const usePage = (pc: number, initialPage: number = 0): [ number, number[], () => void, () => void, (p: number) => void, Dispatch<SetStateAction<number>> ] => {
  const maxPages = 6;
  const midPoint = Math.ceil(maxPages / 2);

  const [ pageCount, setPageCount ] = useState<number>(pc);
  const [ page, internalSetPage ] = useState<number>(initialPage);
  const [ pages, setPages ] = useState<number[]>([]);

  const setPage = (p: number) => {
    console.log(`trying to set page to ${p}. pageCount = ${pageCount}`);
    if (p < pageCount && p >= 0) {
      internalSetPage(p);
    }
  };

  const incrementPage = () => {
    if (page < pageCount - 1) {
      internalSetPage(page + 1);
    }
  };

  const decrementPage = () => {
    if (page > 0) {
      internalSetPage(page - 1);
    }
  };

  useEffect(() => {
    if (pageCount < 2) {
      setPages([]);
      return;
    }

    let startPage: number;
    let endPage: number;

    if (page < midPoint) { // near the start
      startPage = 0;
      endPage = Math.min(maxPages, pageCount) - 1;
    } else if (page >= pageCount - midPoint) { // near the end
      startPage = pageCount - Math.min(maxPages, pageCount);
      endPage = pageCount - 1;
    } else { // in between
      startPage = page - midPoint + 1;
      endPage = Math.min(maxPages, pageCount) + page - midPoint;
    }
    const newPages = [];
    for (let i = startPage; i <= endPage; i++) {
      newPages.push(i);
    }
    setPages(newPages);
  }, [ page, pageCount ]);

  return [ page, pages, incrementPage, decrementPage, setPage, setPageCount ];
};
