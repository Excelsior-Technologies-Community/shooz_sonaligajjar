import React from 'react'
import '/src/styles/CollectionCard.css'
import { Link } from 'react-router-dom'

const CollectionCard = ({ item, onClick }) => {
  return (
    <div>
      <div className='collection-card' onClick={onClick}>
        {/* <div className='card-image'>
          <img src={item.image} alt={item.title} />
        </div> */}

        <div className='card-info'>
          {/* <h3>{item.title} <sup> 8</sup></h3> */}
          {/* <span>8</span> */}
        </div>

        <Link to={`/collection/${item.title.toLowerCase().replace(/\s+/g, "-")}`}>
          <div className="collection-content">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default CollectionCard
