import React from 'react'
import { useFilterContext } from '../context/FilterContext'

export default function FilterSection() {
  const {filters:{text}, updateFilterValue} = useFilterContext();
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" className='form-control' name='text' value={text} onChange={updateFilterValue} />
      </form>
    </>
  )
}
