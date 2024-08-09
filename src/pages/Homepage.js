import React, { useState } from 'react';
import ChatbotToggle from '../components/ChatbotToggle';
import Homeproduct from '../components/Home-product';
import { GoArrowRight } from "react-icons/go";
import { GoTag } from "react-icons/go";
import { HiOutlineUser } from "react-icons/hi";
import { BiMessageAlt } from "react-icons/bi";
import { IoHeart } from "react-icons/io5";
import LikeButton from '../components/LikedButton';
import StarRating from '../components/StarRating';
import ColumnSlideScroll from "../components/ColumnSlideScroll";
import '../styles/HomePage.css';

const Homepage = () => {
  const [popularProduct, setPopularProduct] = useState(Homeproduct)

  const [clickedBox, setClickedBox] = useState(null);

  const handleBoxClick = (id) => {
    setClickedBox(id);
  };

  const boxes = [
    { id: 1, img: 'assets/fruits.svg', label: 'Fresh Fruit' },
    { id: 2, img: 'assets/veggies.svg', label: 'Fresh Vegetables' },
    { id: 3, img: 'assets/meat n fish.svg', label: 'Meat & Fish' },
    { id: 4, img: 'assets/snacks.svg', label: 'Snacks' },
    { id: 5, img: 'assets/beverages.svg', label: 'Beverages' },
    { id: 6, img: 'assets/beauty.svg', label: 'Beauty & Health' },
    { id: 7, img: 'assets/bread.svg', label: 'Bread & Bakery' },
    { id: 8, img: 'assets/baking.svg', label: 'Baking Needs' },
    { id: 9, img: 'assets/cooking.svg', label: 'Cooking' },
    { id: 10, img: 'assets/diabetes.svg', label: 'Diabetic Food' },
    { id: 11, img: 'assets/dish detergents.svg', label: 'Dish Detergents' },
    { id: 12, img: 'assets/oil.svg', label: 'Oil' }
  ];

  const foodBox = [
    { id: 1, img: 'assets/spaghetti.svg', label: 'The ultimate guide to spaghetti: a delicious journey you should try with families.' },
    { id: 2, img: 'assets/chicken.svg', label: 'Chicken, the most consumed protein globally, is a staple in many cuisines.' },
    { id: 3, img: 'assets/burger.svg', label: 'Burger, the quintessential comfort food, have captured the hearts of many.' }
  ];



  return (
    <>
      <div className="homepage">
        <div className='contain'>
          <div className='left'>
            <h1>Get Your Daily <br />
              Needs <span>Deliver</span> <br />
              <span>Quickly</span>
            </h1>
            <p>Shop online, save time, and enjoy convenient <br />
              delivery same day fast reliable and fresh <br />
              delivery for all your daily needs.
            </p>
            <div className='button'>
              <button>Shop now <GoArrowRight className='right' /></button>
              <button className='learn'>Learn more <GoArrowRight className='right' /></button>
            </div>
          </div>
          <div className='right'>
            <img src='assets/Girl pic.svg' alt='girl-pic'></img>
          </div>
          <ChatbotToggle />
        </div>

        <div className='categories'>
          <div className='top-text'>
            <h2>Popular Categories</h2>
            <p className='view'>View All <GoArrowRight className='right' /></p>
          </div>
          <div className='bottom-text'>
            <p>Shop online, save time, and enjoy convenient delivery same day fast <br />
              reliable and fresh delivery for all your daily needs.</p>
          </div>
          <div className='category'>
            <div className='box-1'>
              {boxes.slice(0, 6).map(box => (
                <div
                  key={box.id}
                  className={`box ${clickedBox === box.id ? 'clicked' : ''}`}
                  onClick={() => handleBoxClick(box.id)}
                >
                  <img src={box.img} alt={box.label}></img>
                  <p>{box.label}</p>
                </div>
              ))}
            </div>
            <br />
            <div className='box-1'>
              {boxes.slice(6).map(box => (
                <div
                  key={box.id}
                  className={`box ${clickedBox === box.id ? 'clicked' : ''}`}
                  onClick={() => handleBoxClick(box.id)}
                >
                  <img src={box.img} alt={box.label}></img>
                  <p>{box.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='products'>
          <div className='top-text'>
            <h2>Popular Categories</h2>
            <p className='view2'>View All <GoArrowRight className='right' /></p>
          </div>
          <div className='bottom-text'>
            <p>Shop online, save time, and enjoy convenient delivery same day fast <br />
              reliable and fresh delivery for all your daily needs.</p>
          </div>
          <div className='wrapper'>
            {
              popularProduct.map((curElm) => {
                return (
                  <>
                    <div className='product-box'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                        <div className='icon'>
                          <div className='icon-circle'>
                            <LikeButton className='heart' />
                          </div>
                        </div>
                      </div>
                      <div className='info'>
                        <p className='first'>{curElm.Name}</p>
                        <p className='price'>N{curElm.price}<span className='money'>N20.99</span></p>
                        <StarRating totalStars={5} />
                        <button className='cart'>Add to Cart</button>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
        <div className='news'>
          <h2>Latest News</h2>
          <p className='news'>
            Get latest news from our bloggers, in other to try out new dishes <br />
            with your family and friends.
          </p>
          <div className='foods'>
            <div className='food-box'>
              {foodBox.slice(0, 3).map(foodBox => (
                <div
                  key={foodBox.id}
                  className={`foodBox ${clickedBox === foodBox.id ? 'clicked' : ''}`}
                  onClick={() => handleBoxClick(foodBox.id)}
                >
                  <div className='date'></div>
                  <img src={foodBox.img} alt={foodBox.label}></img>
                  <div className='des'>
                    <div className='icons'>
                      <div className='food-icon'><span><GoTag className='food' />Food</span></div>
                      <div className='admin-icon'><span><HiOutlineUser className='admin' />By Admin</span></div>
                      <div className='comments-icon'><span><BiMessageAlt className='comment' />65 Comments</span></div>
                    </div>
                    <p>{foodBox.label}</p>
                    <div className='btn'>
                      <button className='btn'>Read More<GoArrowRight className='right' /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='points-field'>
          <h1>Why Choose Us?</h1>
          <div className='points'>
            <div className='point-container-1'>
              <div className='point-1'>
                <div className='img'>
                  <img src='assets/premium quality.svg'></img>
                </div>
                <h2>Premium Quality</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Metus nisl <br />
                  sit luctus purus urna feugiat vitae tellus. Ultrices <br />
                  faucibus arcu magna arcu nunc magna. Tellus risus <br />
                  scelerisque est ornare pharetra pretium tempor <br />
                  dictumst ut. Arcu neque et
                </p>
              </div>
              <div className='point-1'>
                <div className='img'>
                  <img src='assets/best price.svg'></img>
                </div>
                <h2>Best Price</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Metus nisl <br />
                  sit luctus purus urna feugiat vitae tellus. Ultrices <br />
                  faucibus arcu magna arcu nunc magna. Tellus risus <br />
                  scelerisque est ornare pharetra pretium tempor <br />
                  dictumst ut. Arcu neque et
                </p>
              </div>
            </div>  
            <div className='snacks'>
              <img src='assets/snacks2.svg'></img>
            </div>
            <div className='point-container-1'>
              <div className='point-1'>
                <div className='img'>
                  <img src='assets/service.svg'></img>
                </div>
                <h2>24/7 Service</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Metus nisl <br />
                  sit luctus purus urna feugiat vitae tellus. Ultrices <br />
                  faucibus arcu magna arcu nunc magna. Tellus risus <br />
                  scelerisque est ornare pharetra pretium tempor <br />
                  dictumst ut. Arcu neque et
                </p>
              </div>
              <div className='point-1'>
                <div className='img'>
                  <img src='assets/natural.svg'></img>
                </div>
                <h2>100% Natural</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Metus nisl <br />
                  sit luctus purus urna feugiat vitae tellus. Ultrices <br />
                  faucibus arcu magna arcu nunc magna. Tellus risus <br />
                  scelerisque est ornare pharetra pretium tempor <br />
                  dictumst ut. Arcu neque et
                </p>
              </div>
            </div>
          </div>
        </div>
        <ColumnSlideScroll />
      </div>
    </>
  );
};

export default Homepage;
