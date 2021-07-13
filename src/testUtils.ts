export const getRandomString = (length = 8): string => 
  Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length);
