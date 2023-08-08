import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://moviesdatabase.p.rapidapi.com',
    prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '');
        headers.set('X-RapidAPI-Host', 'moviesdatabase.p.rapidapi.com');
    }
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (params) => `/titles?startYear=2022&list=most_pop_movies&${params}`,
    }),
  }),
});

export const { useGetMoviesQuery } = apiSlice;
