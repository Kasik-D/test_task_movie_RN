import { colors } from '../theme';
import { navigationRef } from './../navigation/root-navigation';
import { ROUTES } from './routes';

export const DOMAIN_URL = 'http://172.16.41.16:8001/api/v1/';

export const HomeItems = [
  {
    backgroundColor: colors.purple,
    text: 'Create movie',
    onPress: () => navigationRef.navigate(ROUTES.createSimpleMovie),
  },
  {
    backgroundColor: colors.blue,
    text: 'Movie list',
    onPress: () => navigationRef.navigate(ROUTES.moviesList),
  },
  {
    backgroundColor: colors.teal,
    text: 'Import movie',
    onPress: () => navigationRef.navigate(ROUTES.importMovie),
  },
];
