import { ApiError } from 'next/dist/server/api-utils';

export const HandleResponseError = (error: any) => {
  const errorMessage =
    typeof error?.response?.data?.message === 'string'
      ? error.response.data.message
      : error?.message || 'Unknown';

  throw new ApiError(errorMessage, error?.response?.status || 400);
};
