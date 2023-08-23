import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://${process.env.NEXT_PUBLIC_MOVIES_APP_HOST}`,
    prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', `${process.env.NEXT_PUBLIC_MOVIES_APP_KEY}`);
        headers.set('X-RapidAPI-Host', `${process.env.NEXT_PUBLIC_MOVIES_APP_HOST}`);
    }
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (params) => `/titles?${params}`,
    }),
  }),
});

export const { useGetMoviesQuery } = apiSlice;
