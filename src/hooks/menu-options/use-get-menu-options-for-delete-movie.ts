type Props = {
  onDeleteCallback: () => void | Promise<void>;
};

export const useGetMenuOptionsForDeleteMovie = ({ onDeleteCallback }: Props) => {
  const optionsForDeleteMovie = ['Yes, delete movie', 'No, I misclicked', 'Cancel'];

  const onButtonPressOptionsDeleteMovie = (selectedIndex?: number) => {
    switch (selectedIndex) {
      case 0: {
        onDeleteCallback();
        break;
      }

      case 1: {
        break;
      }
    }
  };

  return {
    optionsForDeleteMovie,
    onButtonPressOptionsDeleteMovie,
  };
};
