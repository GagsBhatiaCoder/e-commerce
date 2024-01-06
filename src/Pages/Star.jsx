import React from 'react'

export default function Star({star, reviews}) {
    const starRatings = Array.from({length:5}, (elem, index) => {
        let number = index + 0.5
        return <span key={index}>
            {star >= index + 1 ? <i className="bi bi-star-fill" style={{color:"#FFA41C"}}></i> : star >= number
            ?  <i className="bi bi-star-half" style={{color:"#FFA41C"}}></i> : <i className="bi bi-star" style={{color:"#FFA41C"}}></i>}
        </span>
    } )
  return (
    <div>
      {starRatings}
      <p>({reviews} customer reviews)</p>
    </div>
  )
}
