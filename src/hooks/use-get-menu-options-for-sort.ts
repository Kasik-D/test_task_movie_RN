import { Sort } from '../types';
import { useMovies } from '.';

export const useGetMenuOptionsForSort = () => {
  const { setSort } = useMovies();

  const optionsForSort = [Sort.id, Sort.title, Sort.year, 'Cancel'];

  const onButtonPressOptionsSort = (selectedIndex?: number) => {
    switch (selectedIndex) {
      case 0: {
        setSort(Sort.id);
        break;
      }

      case 1: {
        setSort(Sort.title);
        break;
      }

      case 2: {
        setSort(Sort.year);
        break;
      }
    }
  };

  return {
    optionsForSort,
    onButtonPressOptionsSort,
  };
};
