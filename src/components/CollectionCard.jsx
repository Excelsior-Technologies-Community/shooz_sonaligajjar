import React from 'react'
import '/src/styles/CollectionCard.css'

const CollectionCard = ({ item, onClick }) => {
  return (
    <div className='collection-card' onClick={onClick}>
      <div className='card-image'>
        <img src={item.image} alt={item.title} />
      </div>

      <div className='card-info'>
        <h3>{item.title} <sup> 8</sup></h3>
        {/* <span>8</span> */}
      </div>
    </div>
    
  )
}

export default CollectionCard
