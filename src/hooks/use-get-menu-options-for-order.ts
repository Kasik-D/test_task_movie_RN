import { SortingOrders } from '../types';
import { useMovies } from '.';

export const useGetMenuOptionsForOrder = () => {
  const { setOrder } = useMovies();

  const optionsForOrder = [SortingOrders.Desc, SortingOrders.Asc, 'Cancel'];

  const onButtonPressOptionsOrder = (selectedIndex?: number) => {
    switch (selectedIndex) {
      case 0: {
        setOrder(SortingOrders.Desc);
        break;
      }

      case 1: {
        setOrder(SortingOrders.Asc);
        break;
      }
    }
  };

  return {
    optionsForOrder,
    onButtonPressOptionsOrder,
  };
};
