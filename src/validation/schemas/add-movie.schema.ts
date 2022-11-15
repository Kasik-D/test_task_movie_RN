/* eslint-disable unicorn/better-regex */
import * as yup from 'yup';

import * as MESSAGES from '../messages';

export const addMovieSchema = yup.object().shape({
  // eslint-disable-next-line prettier/prettier
  title: yup
    .string()
    .matches(/^(.*)?\S+(.*)?$/, MESSAGES.EMPTY)
    .required(MESSAGES.REQUIRE_MESSAGE),
  year: yup.string().required(MESSAGES.REQUIRE_MESSAGE),
  // format: yup.string().required(MESSAGES.REQUIRE_MESSAGE),
  actors: yup.array().min(1, MESSAGES.ARRAY_IS_EMPTY_ACTORS),
});
