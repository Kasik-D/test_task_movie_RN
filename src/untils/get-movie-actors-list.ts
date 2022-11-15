import { Actor } from '../types';

export const getMovieActors = (actors: Actor[]) => {
  return actors?.reduce((previousValue: string, currentValue: Actor, index: number) => {
    return index !== actors?.length && index !== 0
      ? previousValue + ', ' + currentValue?.name
      : previousValue + ' ' + currentValue?.name;
  }, ' ');
};
