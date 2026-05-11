import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '/src/styles/FilterSidebar.css'

function FilterSidebar({ products, setFiltered }) {

    const [inStock, setInStock] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");

    // price status 
    const [maxPrice, setMaxPrice] = useState(25);


    // brands 
    const [showBrands, setShowBrands] = useState(true);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const brands = [
        "ComfortCreek",
        "EcoStride",
        "ProSteps",
        "RetroSole",
        "SprintMax",
        "TrailGear",
        "TrendyFeet",
        "UrbanStep"
    ];



    const categories = [
        "Athletic Footwear",
        "Boots For Every Occasion",
        "Luxury Leather Shoes",
        "Sandals & Slides",
        "Sneakerhead's Heaven"
    ];

    // filter products
    const handleFilter = (category, stockValue, min = 0, max = maxPrice) => {

        let updatedProducts = [...products];

        // category filter
        if (category) {
            updatedProducts = updatedProducts.filter(
                (item) => item.category === category
            );
        }

        // stock filter
        if (stockValue) {
            updatedProducts = updatedProducts.filter(
                (item) => item.inStock === true
            );
        }

        // price filter 
        updatedProducts = updatedProducts.filter(
            (item) =>
                item.price >= min &&
                item.price <= max
        );

        if (selectedBrands.length > 0) {
            updatedProducts = updatedProducts.filter(
                (item) => selectedBrands.includes(item.brand)
            );
        }

        setFiltered(updatedProducts);
    };

    return (
        <div className='filter-sidebar'>

            <h2>Filter:</h2>

            <hr style={{ marginBottom: "20px" }} />

            {/* collection */}
            <div className='filter-section'>

                <h3>Collection</h3>

                {categories.map((category, index) => (

                    <p
                        key={index}
                        className={
                            selectedCategory === category
                                ? "active-category"
                                : ""
                        }

                        onClick={() => {
                            setSelectedCategory(category);
                            handleFilter(category, inStock);
                        }}
                    >
                        {category} <span>(8)</span>
                    </p>
                ))}
            </div>


            {/* availability */}
            <div className='filter-section'>

                <h3>Availability</h3>

                <label>

                    <input
                        type="checkbox"
                        checked={inStock}

                        onChange={(e) => {
                            setInStock(e.target.checked);

                            handleFilter(
                                selectedCategory,
                                e.target.checked
                            );
                        }}
                    />

                    In Stock
                </label>


                <label>

                    <input
                        type="checkbox"
                        checked={inStock}

                        onChange={(e) => {
                            setInStock(e.target.checked);

                            handleFilter(
                                selectedCategory,
                                e.target.checked
                            );
                        }}
                    />

                    Out of Stock
                </label>

            </div>

            {/* price */}
            <div className='filter-section'>
                <h3>Price</h3>


                {/* range slider */}
                <div className='price-slider'>

                    <input type="range"
                        min="0"
                        max="25"
                        value={maxPrice}

                        onChange={(e) => {
                            const value = Number(e.target.value);

                            setMaxPrice(value);

                            handleFilter(selectedCategory, inStock, 0, value);
                        }}
                    />
                </div>

                {/* min max box */}
                <div className='price-boxes'>

                    <div className='price-box'>
                        {/* <span>Min Price</span> */}
                        <p>$ <span>0.00</span></p>
                    </div>

                    <div className='price-box'>
                        {/* <span>Max Price</span> */}
                        <p>$ <span>{maxPrice}.00</span></p>
                    </div>

                </div>

            </div>

            {/* brand section */}
            <div className='filter-section'>

                {/* heading */}
                <div className='filter-dropdown'
                    onClick={() => setShowBrands(!showBrands)}
                >
                    <h3>Brand</h3>

                    <span>
                        {showBrands ? "^" : ">"}
                    </span>

                </div>

                {/* dropdown brands */}
                {showBrands && (
                    <div className='brand-options'>
                        {brands.map((brand, index) => (
                            <label key={index}
                            className='brand-label'
                            >
                                <input type="checkbox"
                                checked={
                                    selectedBrands.includes(brand)
                                } 
                                
                                onChange={(e) => {
                                    let updateBrands;

                                    if(e.target.checked) {
                                        updateBrands = [
                                            ...selectedBrands,
                                            brand
                                        ];
                                    } else {
                                        updateBrands = 
                                        selectedBrands.filter(
                                            (item) => item !== brand
                                        );
                                    }

                                    setSelectedBrands(updateBrands);

                                    let updatedProducts = [...products];

                                    // category
                                    if(selectedCategory) {
                                        updatedProducts = updatedProducts.filter(
                                            (item) => item.category === selectedCategory
                                        );
                                    }

                                    // price
                                    updatedProducts = updatedProducts.filter(
                                        (item) => item.price <= maxPrice
                                    );

                                    // brand
                                    if(updateBrands.length > 0) {
                                        updatedProducts = updatedProducts.filter(
                                            (item) => updateBrands.includes(item.brand)
                                        );
                                    }

                                    setFiltered(updatedProducts);

                                }}
                                />

                                <span>{brand} (1)</span>

                            </label>
                        ))}
                    </div>
                )}
            </div>

        </div>
    )
}

export default FilterSidebar