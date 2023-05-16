'use client'

// Types
import { INextPageError } from '@/types'

export default function Error({ error, reset }: INextPageError) {
  return (
    <>
      <h1>Something went wrong, please try again</h1>
      <h2>Error: {error.message}</h2>
      <button onClick={() => reset()}>Try again</button>
    </>
  )
}
