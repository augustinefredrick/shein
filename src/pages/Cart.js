import React from 'react'
import '../assets/css/home.css'
import '../assets/css/cart.css'
import cart1 from '../assets/images/cart1.webp'
import cart2 from '../assets/images/cart2.webp'
import cart3 from '../assets/images/cart3.webp'
import cart4 from '../assets/images/cart4.webp'
import cart5 from '../assets/images/cart5.webp'
import cart6 from '../assets/images/cart6.webp'
import cart7 from '../assets/images/cart7.webp'
import trends from '../assets/images/trends.svg'
import down from '../assets/images/down.png'
import heart from '../assets/images/heart.png'
import recommend1 from '../assets/images/recommend1.webp'
import recommend2 from '../assets/images/recommend2.webp'
import recommend3 from '../assets/images/recommend3.webp'
import recommend4 from '../assets/images/recommend4.webp'
import recommend5 from '../assets/images/recommend5.webp'
import sheinCart from '../assets/images/shein-cart.svg'

const Cart = () => {
  return (
    <div className='container'>
      <div className='cart-page'>
        <ul>
            <li>Home /</li>
            <li>Women Apparel /</li>
            <li>Women Clothing /</li>
            <li>Women Tops, Blouses & Tee /</li>
            <li>Women T-Shirts</li>
            <li>Women T-Shirts</li>
            <li>SHEIN LUNE Women's Mountain And Flying Bird Printed Short Sleeve T-Shirt</li>
        </ul>

        <div className="cart-content">
            <div className="cart-content1">
                <img src={cart1} alt="cart1" />
                <img src={cart2} alt="cart2" />
                <img src={cart3} alt="cart3" />
                <img src={cart4} alt="cart4" />
                <img src={cart5} alt="cart5" />
                <img src={cart6} alt="cart6" />
                <img src={cart7} alt="cart7" />
            </div>
            <div className="cart-content2"><img src={cart1} alt="cart1" /></div>
            <div className="cart-content3">
                <p>SHEIN Slayr Women's Casual High Waist Pants With Solid Color And Pocket Design</p>
                <p className="sku">SKU: sz2403271337557988</p>
                <img src={trends} alt="trends" />
                <p className="cart-price">$16.15</p>
                <p className='color-name'><strong>Color</strong>: Army Green</p>
                <div className='color-button'>
                  <button className='color-btn1'></button>
                  <button className='color-btn2'></button>
                  <button className='color-btn3'></button>
                  <button className='color-btn4'></button>
                  <button className='color-btn5'></button>
                </div>
                <div className='size'>
                <p><strong>Size:</strong></p>
                <button>Type <img src={down} alt="" /> </button>
                </div>
                <div className="size-selection">
                  <button>S</button>
                  <button>M</button>
                  <button>L</button>
                  <button>XL</button>
                </div>
                <div className="add-btn">
                  <button className='add-btn1'>ADD TO CART</button>
                  <button className='add-btn2'><img src={heart} alt="heart" /></button>
                </div>
            </div>
        </div>
      </div>

      <div className="recommend">
          <h2 className='related'>Customers Also Viewed</h2>
          <div className='recommend-card'>
            <div className="recommend-body">
              <div className="recommend-img">
                <img src={recommend1} alt="recommend1" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="recommend-price">
                <p>$10.20</p>
                <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="recommend-body">
              <div className="recommend-img">
                <img src={recommend2} alt="recommend1" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="recommend-price">
                <p>$10.20</p>
                <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="recommend-body">
              <div className="recommend-img">
                <img src={recommend3} alt="recommend1" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="recommend-price">
                <p>$10.20</p>
                <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="recommend-body">
              <div className="recommend-img">
                <img src={recommend4} alt="recommend1" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="recommend-price">
                <p>$10.20</p>
                <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="recommend-body">
              <div className="recommend-img">
                <img src={recommend5} alt="recommend1" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="recommend-price">
                <p>$10.20</p>
                <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart;
