"use client"

import * as React from 'react'
import { useGetMoviesQuery } from '@/store/features/api/apiSlice'


export default function MainPage() {

  const { data, error, isLoading } = useGetMoviesQuery('');

  console.log('Movies: ',data);

  return (
    <h1>This is a page</h1>
  )
}