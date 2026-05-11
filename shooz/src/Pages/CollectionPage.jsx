import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import '/src/styles/CollectionPage.css';
import ProductsData from '../data/products';
import FilterSidebar from '../components/FilterSidebar';
import SortBar from '../components/SortBar'
import ProductGrid from '../components/ProductGrid';

function CollectionPage() {
  const { category } = useParams();

  const collections = [
    {
      id: 1,
      category: "Athletic Footwear",
      title: "Classic White Sneakers",
      price: "25.00",
      image: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=1944"
    },

    {
      id: 2,
      category: "Boots For Every Occasion",
      title: "Classic White Sneakers",
      price: "25.00",
      image: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-4.png?v=1731657987&width=1944"
    },

    {
      id: 3,
      category: "Luxury Leather Shoes",
      title: "Classic White Sneakers",
      price: "25.00",
      image: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=720"
    },

    {
      id: 4,
      category: "Sandals & Slides",
      title: "Classic White Sneakers",
      price: "25.00",
      image: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=720"
    },

    {
      id: 5,
      category: "Sustainable Footwear",
      title: "Classic White Sneakers",
      price: "25.00",
      image: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-1.png?v=1731657959&width=720"
    }
  ];

  // const format = (text) => text.toLowerCase().replace(/\s+/g, "-");

  const format = (text) =>
    text
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/\s+/g, "-");
      
  const currentCollection = collections.find(
    (item) => format(item.category) === category
  );

  const filteredProducts = Array.isArray(ProductsData)
    ? ProductsData.filter(
      (product) =>
        format(product.category) === category
    )
    : [];

  const [products] = useState(filteredProducts);
  const [filtered, setFiltered] = useState(filteredProducts);

  useEffect(() => {
    const updateProducts = ProductsData.filter(
      (product) =>
        format(product.category) === category
    );
    setFiltered(updateProducts);

  }, [category]);


  //gridview
  const [gridView, setGridView] = useState(3);

  return (
    <div>
      <Navbar />

      {/* breadcrumb */}
      <p className='breadcrumb'>
        <Link to="/">Home</Link> / {""} {category.replace(/-/g, " ")}
      </p>

      {/* top banner */}
      <div className='athletic-image'>

        <img
          src={currentCollection?.image}
          alt={currentCollection?.category} />

        <div className='athletic-overlay'></div>

        <h2 className='athletic-title'>{currentCollection?.category}</h2>
      </div>


      {/* athletic links */}
      <div className='athletic-links'>

        {collections.map((item) => (

          <Link
            key={item.id}
            to={`/collections/${format(item.category)}`}
            className={
              format(item.category) === category ? "active-link" : ""
            }>
            <p>{item.category} <span>(8)</span></p>
          </Link>
        ))}
      </div>

      <hr style={{ marginTop: "20px", color: "#c4c4c4", width: "200vh", marginLeft: "60px" }} />


      {/* shoes collection cards */}

      <div className='shoes-collection'>

        {collections.map((item) => (

          <div key={item.id}
            className='shoes-cards'>

            <Link
              to={`/collections/${format(item.category)}`}
              className='shoes-category'
            >

              <img src={item.image} alt={item.title} />

              <div className='shoes-content'>
                <p>{item.category}</p>
              </div>

              <div className='shoes-overlay'></div>

            </Link>
          </div>
        ))}
      </div>


      <div className='collect-page'>
        <div className='left'>
          <FilterSidebar filtered={filtered}
            setFiltered={setFiltered}
            products={products}
            gridView={gridView}
            setGridView={setGridView}
          />
        </div>

        <div className='right'>
          <SortBar filtered={filtered} setFiltered={setFiltered} products={products} gridView={gridView} setGridView={setGridView} />
          <ProductGrid products={filtered} gridView={gridView} />
        </div>
      </div>
    </div>
  )
}

export default CollectionPage
