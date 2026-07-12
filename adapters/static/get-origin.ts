export const LOCAL_ORIGIN = 'http://localhost:5173';

export const getOrigin = () => {
  const rawOrigin = process.env.ORIGIN ?? process.env.URL;

  if (rawOrigin) {
    return new URL(rawOrigin.trim()).origin;
  }

  if (process.env.CI === 'true') {
    throw new Error('Environment variable "ORIGIN" is required during CI builds.');
  }

  return LOCAL_ORIGIN;
};
