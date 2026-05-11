import React from 'react'
import '/src/styles/SortBar.css'

function ProductGrid({ products, gridView }) {
  return (
    <div className='product-grid'
    style={{
        gridTemplateColumns: `repeat(${gridView}, 1fr)`
    }}
    >
      {products.map((item) => (
        <div
        key={item.id}
        className='product-card'
        >
            <img src={item.image} alt={item.name} />

            <span>${item.price}.00</span>
            <h3>{item.name}</h3>
            <p>{item.brand}</p>

        </div>
      ))}
    </div>
  )
}

export default ProductGrid
