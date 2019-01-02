export const getIdFromLocationHeader = (location: string) =>
  parseInt(location.split('/').pop(), 10);
