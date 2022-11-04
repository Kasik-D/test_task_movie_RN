/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MovieAPIParams } from '../types';

export const parseParamsMovieAPI = (params: MovieAPIParams) => {
  if (!params) {
    return null;
  }
  let param = '?';

  for (const key in params) {
    if (key && param === '?') {
      // @ts-ignores
      param = param + `${key}=${params[key]}`;
      continue;
    }
    if (key) {
      // @ts-ignores
      param = param + `&${key}=${params[key]}`;
    }
  }
  return param;
};
