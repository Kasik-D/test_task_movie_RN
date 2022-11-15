import { useFormikContext } from 'formik';

import { MovieFormats } from '../../types';

type Props = {
  name: string;
};

export const useGetMenuOptionsForMovieFormat = ({ name }: Props) => {
  const { setFieldValue } = useFormikContext();

  const optionsForFormat = [MovieFormats.DVD, MovieFormats.BluRay, MovieFormats.VHS, 'Cancel'];

  const onButtonPressOptionsFormat = (selectedIndex?: number) => {
    switch (selectedIndex) {
      case 0: {
        setFieldValue(name, MovieFormats.DVD);
        break;
      }

      case 1: {
        setFieldValue(name, MovieFormats.BluRay);
        break;
      }

      case 2: {
        setFieldValue(name, MovieFormats.VHS);
        break;
      }
    }
  };

  return {
    optionsForFormat,
    onButtonPressOptionsFormat,
  };
};
