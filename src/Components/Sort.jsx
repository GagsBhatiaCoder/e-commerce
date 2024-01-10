import React from 'react'
import { useFilterContext } from '../context/FilterContext'

export default function Sort() {
  const {filter_products, grid_view, setGridView, setListView, sorting} = useFilterContext();
  const handleSortChange = (e) => {
  const selectedValue = e.target.value;
    sorting(selectedValue);
  };

  return (
        <div className='container d-flex flex-column flex-md-row justify-content-between p-3 mb-3'>
            <div>
            <button onClick={setGridView} className={`me-1 btn ${grid_view ? " btn-dark " : "btn-light"}`}><i className="bi bi-grid"></i></button>
            <button onClick={setListView} className={`btn ${!grid_view ? " btn-dark " : "btn-light"}`}><i className="bi bi-list"></i></button>
            </div>
            <p>{`${filter_products.length} Available Products`}</p>
            <div className='col-md-2'>
              <form >
            <select className="form-select" aria-label="Default select example" id='sort' name='sort' 
            onClick={handleSortChange}>
              <option value="lowest">Price (low to high)</option>
              <option value="highest">Price (high to low)</option>
              <option value="a-z">Price (a-z)</option>
              <option value="z-a">Price(z-a)</option>
            </select>
            </form>
            </div>
          </div>
  )
}
