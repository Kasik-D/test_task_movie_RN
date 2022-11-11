export const getErrorMessageFields = (errors: any) => {
  let errorMessage = '';
  for (const key in errors) {
    errorMessage =
      errorMessage +
      key.toString() +
      ': ' +
      errors[key]?.toLowerCase()?.replaceAll('_', ' ')?.toString() +
      '\n';
  }
  return errorMessage || '';
};
