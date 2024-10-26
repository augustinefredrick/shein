import React from 'react'
import '../assets/css/shop.css'
// import shop1 from '../assets/images/shop1.webp'
import sheinCart from '../assets/images/shein-cart.svg'
import shop2 from '../assets/images/shop2.webp'
import shop3 from '../assets/images/shop3.webp'
import shop4 from '../assets/images/shop4.webp'
import shop5 from '../assets/images/shop5.webp'
import shop6 from '../assets/images/shop6.webp'
import shop7 from '../assets/images/shop7.webp'
import shop8 from '../assets/images/shop8.webp'
import shop9 from '../assets/images/shop9.webp'
import shop10 from '../assets/images/shop10.webp'
import shop11 from '../assets/images/shop11.webp'
import shop12 from '../assets/images/shop12.webp'
import shop13 from '../assets/images/shop13.webp'
import shop14 from '../assets/images/shop14.webp'
import shop15 from '../assets/images/shop15.webp'
import shop16 from '../assets/images/shop16.webp'
import shop17 from '../assets/images/shop17.webp'
import shop18 from '../assets/images/shop18.webp'
import shop19 from '../assets/images/shop19.webp'
import shop20 from '../assets/images/shop20.webp'
import cart1 from '../assets/images/cart1.webp'
import { Link } from 'react-router-dom'

const Shop = () => {
  return (
    <div className='container'>
      <div className="shop-page">
        <div className='shop-sidebar'>
          <h4>Category</h4>
          <form>
          <input type="radio" /> 
          <label>Women Dresses</label> <br />
          <input type="radio" /> 
          <label>Women Tops, Blouse & Tee</label> <br />
          <input type="radio" /> 
          <label>Women Bottoms</label> <br />
          <input type="radio" /> 
          <label>Women Sweatshirts</label> <br />
          <input type="radio" /> 
          <label>Women Denim</label> <br />
          <input type="radio" /> 
          <label>Women Suits</label> 
          </form>
          <h4>Style</h4>
          <form>
          <input type="checkbox" /> 
          <label>Boho</label> <br />
          <input type="checkbox" /> 
          <label>Work</label> <br />
          <input type="checkbox" /> 
          <label>Party</label> <br />
          <input type="checkbox" /> 
          <label>Modest</label> <br />
          <input type="checkbox" /> 
          <label>Cute</label> <br />
          <input type="checkbox" /> 
          <label>Casual</label> 
          </form>
          <h4>Type</h4>
          <form>
          <input type="checkbox" /> 
          <label>Biker Shorts</label> <br />
          <input type="checkbox" /> 
          <label>Pleated</label> <br />
          <input type="checkbox" /> 
          <label>Asymmetrical</label> <br />
          <input type="checkbox" /> 
          <label>Wide Strap</label> <br />
          <input type="checkbox" /> 
          <label>Skort</label> <br />
          <input type="checkbox" /> 
          <label>Kaftan</label> 
          </form>
          <h4>Pattern Type</h4>
          <form>
          <input type="checkbox" /> 
          <label>Imitation Denim Print</label> <br />
          <input type="checkbox" /> 
          <label>Plaid</label> <br />
          <input type="checkbox" /> 
          <label>Ombre</label> <br />
          <input type="checkbox" /> 
          <label>Chain Print</label> <br />
          <input type="checkbox" /> 
          <label>Polka Dot</label> <br />
          <input type="checkbox" /> 
          <label>Zebra Stripe</label> 
          </form>
          <h4>Length</h4>
          <form>
          <input type="checkbox" /> 
          <label>Mini</label> <br />
          <input type="checkbox" /> 
          <label>Capris</label> <br />
          <input type="checkbox" /> 
          <label>Maxi</label> <br />
          <input type="checkbox" /> 
          <label>Micro Crop</label> <br />
          <input type="checkbox" /> 
          <label>Crop</label> <br />
          <input type="checkbox" /> 
          <label>Regular</label> 
          </form>
          <h4>Sleeve Length</h4>
          <form>
          <input type="checkbox" /> 
          <label>Half Sleeve</label> <br />
          <input type="checkbox" /> 
          <label>Cap Sleeve</label> <br />
          <input type="checkbox" /> 
          <label>Extra-Long Sleeve</label> <br />
          <input type="checkbox" /> 
          <label>Three Quarter Long Sleeve</label> <br />
          <input type="checkbox" /> 
          <label>Sleeveless</label> <br />
          <input type="checkbox" /> 
          <label>Short Sleeve</label> 
          </form>
          <h4>Material</h4>
          <form>
          <input type="checkbox" /> 
          <label>Flannel</label> <br />
          <input type="checkbox" /> 
          <label>Corduroy</label> <br />
          <input type="checkbox" /> 
          <label>Cotton</label> <br />
          <input type="checkbox" /> 
          <label>Knitwear</label> <br />
          <input type="checkbox" /> 
          <label>Imitation Denim Print</label> <br />
          <input type="checkbox" /> 
          <label>PVC</label> 
          </form>
        </div>
        <div className='shop-content'>
          <div className='shop-recommendation'>
          <button>Sort By <span>Recommendation</span></button>
          <button className='evolu'>evoluSHEIN</button>
          </div>
          <div className="shop-products">
            <div className="shop-body">
              <div className="shop-img">
                <Link to='/cart'><img src={cart1} alt="cart1" /></Link>
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="shop-price">
              <p>$10.20</p>
              <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="shop-body">
              <div className="shop-img">
                <img src={shop2} alt="shop2" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="shop-price">
              <p>$10.20</p>
              <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="shop-body">
              <div className="shop-img">
                <img src={shop3} alt="shop3" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="shop-price">
              <p>$10.20</p>
              <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="shop-body">
              <div className="shop-img">
                <img src={shop4} alt="shop4" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="shop-price">
              <p>$10.20</p>
              <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="shop-body">
              <div className="shop-img">
                <img src={shop5} alt="shop5" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="shop-price">
              <p>$10.20</p>
              <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="shop-body">
              <div className="shop-img">
                <img src={shop6} alt="shop6" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="shop-price">
              <p>$10.20</p>
              <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="shop-body">
              <div className="shop-img">
                <img src={shop7} alt="shop7" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="shop-price">
              <p>$10.20</p>
              <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="shop-body">
              <div className="shop-img">
                <img src={shop8} alt="shop8" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="shop-price">
              <p>$10.20</p>
              <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="shop-body">
              <div className="shop-img">
                <img src={shop9} alt="shop9" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="shop-price">
              <p>$10.20</p>
              <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="shop-body">
              <div className="shop-img">
                <img src={shop10} alt="shop10" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="shop-price">
              <p>$10.20</p>
              <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="shop-body">
              <div className="shop-img">
                <img src={shop11} alt="shop11" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="shop-price">
              <p>$10.20</p>
              <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="shop-body">
              <div className="shop-img">
                <img src={shop12} alt="shop12" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="shop-price">
              <p>$10.20</p>
              <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="shop-body">
              <div className="shop-img">
                <img src={shop13} alt="shop13" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="shop-price">
              <p>$10.20</p>
              <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="shop-body">
              <div className="shop-img">
                <img src={shop14} alt="shop14" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="shop-price">
              <p>$10.20</p>
              <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="shop-body">
              <div className="shop-img">
                <img src={shop15} alt="shop15" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="shop-price">
              <p>$10.20</p>
              <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="shop-body">
              <div className="shop-img">
                <img src={shop16} alt="shop16" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="shop-price">
              <p>$10.20</p>
              <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="shop-body">
              <div className="shop-img">
                <img src={shop17} alt="shop17" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="shop-price">
              <p>$10.20</p>
              <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="shop-body">
              <div className="shop-img">
                <img src={shop18} alt="shop18" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="shop-price">
              <p>$10.20</p>
              <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="shop-body">
              <div className="shop-img">
                <img src={shop19} alt="shop19" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="shop-price">
              <p>$10.20</p>
              <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
            <div className="shop-body">
              <div className="shop-img">
                <img src={shop20} alt="shop20" />
                <p> SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's Dress</p>
              </div>
              <div className="shop-price">
              <p>$10.20</p>
              <button><img src={sheinCart} alt="shein-cart" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop;
