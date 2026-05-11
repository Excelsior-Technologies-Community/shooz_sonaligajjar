import React from 'react'
import '/src/styles/EndSale.css'
import products from '../data/products'
import { useNavigate, useParams } from 'react-router-dom';

function EndSale() {

    const navigate = useNavigate();

    const { type } = useParams();

    // const products = [
    //     {
    //         image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=150",
    //         title: "Classic White Tennis Sneakers",
    //         price: "$25.00"
    //     },

    //     {
    //         image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=150",
    //         title: "Waterproof Hiking Boots",
    //         price: "$25.00"
    //     },

    //     {
    //         image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=150",
    //         title: "Classic Leather Sneakers",
    //         price: "$21.00"
    //     }
    // ];

    return (
        <section className="sale-section">
            <div className="sale-header">
                <h5>SEASON'S END SALE</h5>

                <h1>Huge discounts on last season's styles</h1>

                <p>
                    Himenaeos nascetur tristique consequat mus ad.
                    <br />
                    Accumsan fringilla in laoreet id bibendum et.
                </p>
            </div>

            <div className="sale-grid">

                {[0, 3, 6].map((startIndex) => (

                    <div className="sale-column" key={startIndex}>

                        {products
                            .slice(startIndex, startIndex + 3)
                            .map((product) => (

                                <div
                                    className="sale-product"
                                    key={product.id}
                                >

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                    />

                                    <div className='sale-content'>

                                        <h3
                                            onClick={() =>
                                                navigate(`/sneakers/${product.id}`)
                                            }
                                        >
                                            {product.name}
                                        </h3>

                                        <p>${product.price}.00</p>

                                    </div>

                                </div>

                            ))}

                    </div>

                ))}

            </div>
        </section>
    )
}

export default EndSale
