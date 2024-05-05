import React from 'react'
import { useFilterContext } from '../context/FilterContext'
import FormatPrice from './FormatPrice';

export default function FilterSection() {
  const { all_products, filters: { text, colors, price, maxPrice, minPrice }, updateFilterValue, clearFilters } = useFilterContext();
  // const [selectedCategory, setSelectedCategory] = useState('All');
  

  const getUniqueData = (data, property) => {
    let newVal = data.map((currEle) => {
      return currEle[property];
    });
    if(property === "colors"){
      newVal = newVal.flat()
    }
    return (newVal = ["All", ...new Set(newVal)])

  }
  // Unique data Filter
  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");
  // const handleCategoryClick = (currEle) => {
  //   setSelectedCategory(currEle.toLowerCase());
  //   updateFilterValue({ target: { name: 'category', value: currEle.toLowerCase() } });
  // };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" className='form-control' name='text' value={text} onChange={updateFilterValue} placeholder='search' />
      </form>
      <div>
        <h5 className='m-2'>Category</h5>
        <div>
          {categoryData.map((currEle, index) => {
        //  const isActive = filters.category.toLowerCase() === currEle.toLowerCase();       
            return <button type='button' className="btn d-block" name='category' key={index} 
            value={currEle.toLowerCase()} onClick={updateFilterValue}>
              {currEle}
            </button>
          })}
        </div>
      </div>
      <div>
        <h5 className='m-2'>Company</h5>
        <form>
          <select className="form-select" name='company' id='company' aria-label="Default select example"
          onClick={updateFilterValue}>
           {companyData.map((currEle, index) => {
            return(
              <option value={currEle.toLowerCase()} key={index} name="company">
                {currEle}
              </option>
            )
           })}
          </select>
        </form>
      </div>
      <div>
        <h5 className='m-2'>Colors</h5>
        <div className='d-sm-flex'>
          {colorsData.map((currEle, index) => {
            if(currEle.toLowerCase() === "all"){
              return(
                <button
                type='button'
                 className='btn border-0 m-0 p-0 '
                key={index}
                value={currEle}
                name='colors'
                onClick={() => updateFilterValue({ target: { name: 'colors', value: currEle.toLowerCase() } })}
              >All </button>
              )
            }
          return(
            <button type='button' className={` ${colors === currEle ? "btn-style active" : "btn-style p-2"}`} 
            key={index}
            value={currEle}
            name='colors'
            onClick={updateFilterValue}
            style={{backgroundColor: currEle }}>{colors === currEle ? <i className="bi bi-check2 text-light"></i> : null} </button>
          )
        })}</div>
      </div>
      <div>
        <h5 className='m-2'>Price Range</h5>
        <p><FormatPrice price={price} /></p>
        <input type="range" min={minPrice} max={maxPrice} value={price} name='price' onChange={updateFilterValue}/>
      </div>
      <div>
        <button className='btn btn-outline-danger p-1' onClick={clearFilters}> Clear Filters</button>
      </div>
    </>
  )
}
