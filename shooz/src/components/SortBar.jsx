import React from 'react'
import '/src/styles/SortBar.css'

function SortBar({ filtered, setFiltered, products, gridView, setGridView }) {

    const handleSort = (value) => {
        let sortedProducts = [...filtered];

        switch (value) {
            case "low-high":
                sortedProducts.sort(
                    (a, b) => a.price - b.price
                );
                break;

            case "high-low":
                sortedProducts.sort(
                    (a, b) => b.price - a.price
                );
                break;

            case "a-z":
                sortedProducts.sort(
                    (a, b) =>
                        a.name.localCompare(b.name)
                );
                break;

            case "z-a":
                sortedProducts.sort(
                    (a, b) =>
                        b.localCompare(a.name)
                );
                break;

            default:
                sortedProducts = [...products];
        }

        setFiltered(sortedProducts);
    }
    return (
        <div className='sort-bar'>

            {/* left */}
            <div className='grid-buttons'>

                <button className={
                    gridView === 2 ? "active-grid" : ""
                }
                    onClick={() => setGridView(2)}
                >II</button>

                <button className={
                    gridView === 3 ? "active-grid" : ""
                }
                    onClick={() => setGridView(3)}
                >III</button>


                <button className={
                    gridView === 4 ? "active-grid" : ""
                }
                    onClick={() => setGridView(4)}
                >IV</button>

            </div>

            {/* middle */}

            <div className='sort-dropdown'>
                <label>Sort By:</label>

                <select onChange={(e) => handleSort(e.target.value)}>
                    <option>Featured</option>
                    <option value="relevant">Most Relevant</option>
                    <option value="best">Best Selling</option>
                    <option value="a-z">Alphabetically, A-Z</option>
                    <option value="z-a">Alphabetically, Z-A</option>
                    <option value="low-high">Price, Low to High</option>
                    <option value="high-low">Price, High to Low</option>
                    <option value="old-new">Date, Old to New</option>
                    <option value="new-old">Date, New to Old</option>
                </select>

            </div>

            {/* right */}

            <p className='product-count'>
                {filtered.length} Products
            </p>
        </div>
    )
}

export default SortBar
