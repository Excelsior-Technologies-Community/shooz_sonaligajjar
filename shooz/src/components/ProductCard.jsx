import React from 'react'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { cartContext } from '../context/CartContext'

function ProductCard({ product }) {

  const { addToCart } = useContext(cartContext);

  return (
    <div className='card'>

        {/* <Link to={`/product/${product.type}`}> */}
        <Link to={`/product/${product.id}`}>

            <img src={product.image} alt={product.title} />

            <p>{product.price}</p>

            {/* <h3>{product.title}</h3> */}
            <h3>{product.name}</h3>
            
            <span>{product.brand}</span>

        </Link>

        {/* ADD TO CART BUTTON */}
        <button onClick={() => addToCart(product)}
        >Add to Cart</button>
    </div>
  )
}

export default ProductCard


