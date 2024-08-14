import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productPage from '../components/productPage'
import { GoChevronLeft } from "react-icons/go";
import LikeButton from '../components/LikedButton';
import '../styles/ProductPage.css';

const ProductPage = () => {
  const [popularProduct, setPopularProduct] = useState(productPage)

  const [clickedBox, setClickedBox] = useState(null);

  const handleBoxClick = (id) => {
    setClickedBox(id);
  };

  return (
    <>
      <div className="head">
      <Link to={`/`} className='link'><button><GoChevronLeft className='arrow-left'/> Back</button></Link>
      <h1>Varieties of Fruits</h1>
      </div>
      <div className='all-fruit-product'>
        {
          popularProduct.map((CurElm) => {
            return (
              <>
              <Link className='link'>
                <div 
                  className={`fruit-box ${clickedBox === CurElm.id ? 'clicked' : ''}`}
                  onClick={() => handleBoxClick(CurElm.id)}
                >
                    <div className='img-box'>
                      <img src={CurElm.image} alt=''></img>
                      <div className='icon'>
                        <div className='icon-circle'>
                          <LikeButton className='heart' />
                        </div>
                      </div>
                    </div>
                    <div className='info'>
                      <p className='first'>{CurElm.Name}</p>
                      <p className='cost'>N{CurElm.price}<span className='faint'>N20.99</span></p>
                      <div className='percent'><p>-5%</p></div>
                      <p className='saving'>You save N50</p>
                    </div>
                  </div>
              </Link>
              </>
            )
          })
        }
      </div>
    </>

  )
}

export default ProductPage