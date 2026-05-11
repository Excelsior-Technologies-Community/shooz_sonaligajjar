import React from 'react'
import { useNavigate } from 'react-router-dom'
import products from '../data/products';

function SaveBig() {
    const navigate = useNavigate();
  return (
    <div className='save-container'>
        <div className='save-top'>
            <h5>OUR MOST POPULAR STYLES</h5>

            <h1>Save big on shoes from last season</h1>

            <p>Morbi natoque id finibus natoque sapien turpis elementum maximus. Sociosqu auctor a urna consequat laoreet nisi accumsan magna. Adipiscing vulputate nec euismod, a aliquam enim. Mi facilisi ex est habitant lacus sagittis vitae.</p>

            <p>Molestie dolor mus vitae penatibus sed lectus convallis ut neque. Leo elementum euismod penatibus cras sociosqu aliquet tellus.</p>

            <button onClick={() => navigate(`/collections/${products.id}`)}>SHOP NOW <i className="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
  )
}

export default SaveBig
