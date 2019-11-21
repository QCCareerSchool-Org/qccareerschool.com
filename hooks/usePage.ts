import { Dispatch, SetStateAction, useState } from 'react';

export const usePage = (maxPages: number, initialPage: number = 0): [ number, () => void, () => void, Dispatch<SetStateAction<number>> ] => {
  const [ page, setPage ] = useState<number>(initialPage);

  const incrementPage = () => {
    if (page < maxPages) {
      setPage(page + 1);
    }
  };

  const decrementPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return [ page, incrementPage, decrementPage, setPage ];
};
