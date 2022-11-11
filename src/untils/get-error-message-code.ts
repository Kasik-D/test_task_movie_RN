export const getErrorMessageCode = (error: any) => {
  const errorMessage = error.toLowerCase()?.replaceAll('_', ' ')?.toString() + '\n';
  return errorMessage || '';
};
