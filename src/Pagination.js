import React from 'react'

export default function Pagination({ goToNextPage,goToPreviousPage}) {
  return (
    <div>
          {goToNextPage && <button onClick={goToNextPage}>Next</button>}
          {goToPreviousPage && <button onClick={goToPreviousPage}>Previous</button>}
    </div>
  )
}
