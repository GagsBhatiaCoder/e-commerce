import React from 'react'
import { useFilterContext } from '../context/FilterContext'

export default function Sort() {
  const {filter_products, grid_view, setGridView, setListView} = useFilterContext()
  return (
        <div className='container d-flex flex-column flex-md-row justify-content-between p-3 mb-3'>
            <div>
            <button onClick={setGridView} className={`me-1 btn ${grid_view ? " btn-dark " : "btn-light"}`}><i className="bi bi-grid"></i></button>
            <button onClick={setListView} className={`btn ${!grid_view ? " btn-dark " : "btn-light"}`}><i className="bi bi-list"></i></button>
            </div>
            <p>{`${filter_products.length} Available Products`}</p>
            <div className='col-md-2'>
            <select className="form-select" aria-label="Default select example">
              <option >Price a-z</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            </div>
          </div>
  )
}
