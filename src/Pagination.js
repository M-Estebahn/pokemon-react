import React from 'react'

export default function Pagination({ goToNextPage,goToPreviousPage}) {
  return (
    <div>
          <button onClick={goToNextPage}>Next</button>
          <button onClick={goToPreviousPage}>Previous</button>
    </div>
  )
}
