/* eslint-disable unicorn/better-regex */
import * as yup from 'yup';

import * as MESSAGES from '../messages';

export const loginSchema = yup.object().shape({
  login: yup
    .string()
    .matches(/^[A-Za-z0-9А-я_@./#&+-]*$/, MESSAGES.INCORRECT_LOGIN)
    .max(16, MESSAGES.INCORRECT_MAX_LENGTH_16)
    .required(MESSAGES.REQUIRE_MESSAGE),
  password: yup.string().required(MESSAGES.REQUIRE_MESSAGE),
});
