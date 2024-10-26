import React from 'react';
import '../assets/css/home.css';
import slide1 from '../assets/images/slide1.webp';
import slide2 from '../assets/images/slide2.webp';
import slide3 from '../assets/images/slide3.webp';
import promo from '../assets/images/left-banner.webp';
import hero from '../assets/images/hero.webp';
import deal from '../assets/images/speed.webp';
import one from '../assets/images/one.webp';
import two from '../assets/images/two.webp';
import three from '../assets/images/three.webp';
import four from '../assets/images/four.webp';
import five from '../assets/images/five.webp';
import six from '../assets/images/six.webp';
import done from '../assets/images/done.webp';
import dtwo from '../assets/images/dtwo.webp';
import dthree from '../assets/images/dthree.webp';
import dfour from '../assets/images/dfour.webp';
import dfive from '../assets/images/dfive.webp';
import dsix from '../assets/images/dsix.webp';
import spotlight1 from '../assets/images/spotlight1.webp';
import spotlight2 from '../assets/images/spotlight2.webp';
import spotlight3 from '../assets/images/spotlight3.webp';
import spotlight4 from '../assets/images/spotlight4.webp';
import spotlight5 from '../assets/images/spotlight5.webp';
import trending1 from '../assets/images/trending1.webp';
import trending2 from '../assets/images/trending2.webp';
import trending3 from '../assets/images/trending3.webp';
import trending4 from '../assets/images/trending4.webp';
import trending5 from '../assets/images/trending5.webp';
import recommend1 from '../assets/images/recommend1.webp';
import recommend2 from '../assets/images/recommend2.webp';
import recommend3 from '../assets/images/recommend3.webp';
import recommend4 from '../assets/images/recommend4.webp';
import recommend5 from '../assets/images/recommend5.webp';
import sheinCart from '../assets/images/shein-cart.svg';
import gallery1 from '../assets/images/gallery1.webp';
import gallery2 from '../assets/images/gallery2.webp';
import gallery3 from '../assets/images/gallery3.webp';
import gallery4 from '../assets/images/gallery4.webp';
import gallery5 from '../assets/images/gallery5.webp';
import women from '../assets/images/women.webp';
import men from '../assets/images/men.webp';
import baby from '../assets/images/baby.webp';
import dresses from '../assets/images/dresses.webp';
import tops from '../assets/images/tops.webp';
import cords from '../assets/images/co-ords.webp';
import beachwear from '../assets/images/beachwear.webp';
import outdoor from '../assets/images/outdoor.webp';
import underwear from '../assets/images/underwear.webp';
import living from '../assets/images/living.webp';
import shoes from '../assets/images/shoes.webp';
import accessories from '../assets/images/accessories.webp';
import jewelry from '../assets/images/jewelry.webp';
import beauty from '../assets/images/beauty.webp';

const HomePage = () => {
  return (
    <div className='container'>
      <div className='home'>
        <img src={promo} alt='' className='promo' />
        <div className='slider'>
          <div className='slides'>
            {/* slides */}
            <img src={slide1} alt='slide 1' />
            <img src={slide2} alt='slide 2' />
            <img src={slide3} alt='slide 3' />
          </div>
          {/* Navigation button */}
          <div className='prev'>&#10094;</div>
          <div className='next'>&#10095;</div>
        </div>
        <img src={promo} alt='' className='promo' />

        {/* Dots */}
        {/* <div className="dots">
            <span className='dot active'></span>
            <span className='dot'></span>
            <span className='dot'></span>
        </div> */}
      </div>
      {/* <div className="hero">
          <img src={hero} alt="hero" />
        </div> */}

      <div className='all-category'>
        <div className='category-body'>
          <div className='category-img'>
            <img src={women} alt='women' />
          </div>
          <p className='category-p'>Women</p>
        </div>
        <div className='category-body'>
          <div className='category-img'>
            <img src={men} alt='men' />
          </div>
          <p className='category-p'>Men</p>
        </div>
        <div className='category-body'>
          <div className='category-img'>
            <img src={baby} alt='baby' />
          </div>
          <p className='category-p'>Kids & Baby</p>
        </div>
        <div className='category-body'>
          <div className='category-img'>
            <img src={dresses} alt='dresses' />
          </div>
          <p className='category-p'>Dresses</p>
        </div>
        <div className='category-body'>
          <div className='category-img'>
            <img src={tops} alt='tops' />
          </div>
          <p className='category-p'>Tops</p>
        </div>
        <div className='category-body'>
          <div className='category-img'>
            <img src={cords} alt='cords' />
          </div>
          <p className='category-p'>Co-rds</p>
        </div>
        <div className='category-body'>
          <div className='category-img'>
            <img src={beachwear} alt='beachwear' />
          </div>
          <p className='category-p'>Beachwear</p>
        </div>
        <div className='category-body'>
          <div className='category-img'>
            <img src={outdoor} alt='outdoor' />
          </div>
          <p className='category-p'>Sports & Outdoors</p>
        </div>
        <div className='category-body'>
          <div className='category-img'>
            <img src={underwear} alt='underwear' />
          </div>
          <p className='category-p'>Underwear & Sleepwear</p>
        </div>
        <div className='category-body'>
          <div className='category-img'>
            <img src={living} alt='Home' />
          </div>
          <p className='category-p'>Home & Living</p>
        </div>
        <div className='category-body'>
          <div className='category-img'>
            <img src={shoes} alt='accessories' />
          </div>
          <p className='category-p'>Shoes & Bags</p>
        </div>
        <div className='category-body'>
          <div className='category-img'>
            <img src={accessories} alt='jewelry' />
          </div>
          <p className='category-p'>Accessories</p>
        </div>
        <div className='category-body'>
          <div className='category-img'>
            <img src={jewelry} alt='jewelry' />
          </div>
          <p className='category-p'>Jewelry & Watches</p>
        </div>
        <div className='category-body'>
          <div className='category-img'>
            <img src={beauty} alt='beauty' />
          </div>
          <p className='category-p'>Beauty & Health</p>
        </div>
      </div>

      <div className='super-deal'>
        <div className='deal'>
          <img src={deal} alt='deal' />
          <p>View more</p>
        </div>
        <div className='deal-img'>
          <div>
            <img src={one} alt='one' />
            <p>
              $9.<span>00</span>
            </p>
          </div>
          <div>
            <img src={two} alt='one' />
            <p>
              $9.<span>00</span>
            </p>
          </div>
          <div>
            <img src={three} alt='one' />
            <p>
              $9.<span>00</span>
            </p>
          </div>
          <div>
            <img src={four} alt='one' />
            <p>
              $9.<span>00</span>
            </p>
          </div>
          <div>
            <img src={five} alt='one' />
            <p>
              $9.<span>00</span>
            </p>
          </div>
          <div>
            <img src={six} alt='one' />
            <p>
              $9.<span>00</span>
            </p>
          </div>
        </div>
      </div>
      <div className='discount'>
        <p>Buy 6 Get 60% Off</p>
        <p>All under $9.99</p>
      </div>

      <div className='d-banner'>
        <div>
          <img src={done} alt='' />
          <p>$7.00</p>
        </div>
        <div>
          <img src={dtwo} alt='' />
          <p>$7.00</p>
        </div>
        <div>
          <img src={dthree} alt='' />
          <p>$7.00</p>
        </div>
        <div>
          <img src={dfour} alt='' />
          <p>$7.00</p>
        </div>
        <div>
          <img src={dfive} alt='' />
          <p>$7.00</p>
        </div>
        <div>
          <img src={dsix} alt='' />
          <p>$7.00</p>
        </div>
      </div>

      {/* Spotlight */}
      <div className='spotlight'>
        <h2>Spotlight</h2>
        <div className='spotlight-img'>
          <img src={spotlight1} alt='spotlight1' />
          <img src={spotlight2} alt='spotlight2' />
          <img src={spotlight3} alt='spotlight3' />
          <img src={spotlight4} alt='spotlight4' />
          <img src={spotlight5} alt='spotlight5' />
        </div>
      </div>

      <div className='trending'>
        <h2>Trending</h2>
        <div className='trending-img'>
          <img src={trending1} alt='trending1' />
          <img src={trending2} alt='trending2' />
          <img src={trending3} alt='trending3' />
          <img src={trending4} alt='trending4' />
          <img src={trending5} alt='trending5' />
        </div>
      </div>

      <div className='recommend'>
        <h2>Recommend</h2>
        <div className='recommend-card'>
          <div className='recommend-body'>
            <div className='recommend-img'>
              <img src={recommend1} alt='recommend1' />
              <p>
                {' '}
                SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's
                Dress
              </p>
            </div>
            <div className='recommend-price'>
              <p>$10.20</p>
              <button>
                <img src={sheinCart} alt='shein-cart' />
              </button>
            </div>
          </div>
          <div className='recommend-body'>
            <div className='recommend-img'>
              <img src={recommend2} alt='recommend1' />
              <p>
                {' '}
                SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's
                Dress
              </p>
            </div>
            <div className='recommend-price'>
              <p>$10.20</p>
              <button>
                <img src={sheinCart} alt='shein-cart' />
              </button>
            </div>
          </div>
          <div className='recommend-body'>
            <div className='recommend-img'>
              <img src={recommend3} alt='recommend1' />
              <p>
                {' '}
                SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's
                Dress
              </p>
            </div>
            <div className='recommend-price'>
              <p>$10.20</p>
              <button>
                <img src={sheinCart} alt='shein-cart' />
              </button>
            </div>
          </div>
          <div className='recommend-body'>
            <div className='recommend-img'>
              <img src={recommend4} alt='recommend1' />
              <p>
                {' '}
                SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's
                Dress
              </p>
            </div>
            <div className='recommend-price'>
              <p>$10.20</p>
              <button>
                <img src={sheinCart} alt='shein-cart' />
              </button>
            </div>
          </div>
          <div className='recommend-body'>
            <div className='recommend-img'>
              <img src={recommend5} alt='recommend1' />
              <p>
                {' '}
                SHEIN LUNE English Tower Pattern Round Neck Short Sleeve Women's
                Dress
              </p>
            </div>
            <div className='recommend-price'>
              <p>$10.20</p>
              <button>
                <img src={sheinCart} alt='shein-cart' />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='gallery'>
        <h2>Style Gallery</h2>
        <div className='gallery-img'>
          <img src={gallery1} alt='gallery1' />
          <img src={gallery2} alt='gallery2' />
          <img src={gallery3} alt='gallery3' />
          <img src={gallery4} alt='gallery4' />
          <img src={gallery5} alt='gallery5' />
        </div>
      </div>

      <div className='button'>
        <div>
          <button className='btn1'>Fall Style</button>
        </div>
        <div>
          <button className='btn2'>Cozy Comforts</button>
        </div>
        <div>
          <button className='btn3'>Casual Lookbook</button>
        </div>
        <div>
          <button className='btn4'>Electric Nights</button>
        </div>
        <div>
          <button className='btn5'>Time To Shine</button>
        </div>
        <div>
          <button className='btn6'>Urban Chic</button>
        </div>
        <div>
          <button className='btn7'>Chic & Chill</button>
        </div>
        <div>
          <button className='btn8'>Denim Guide</button>
        </div>
        <div>
          <button className='btn9'>Highstreet Fashion</button>
        </div>
        <div>
          <button className='btn10'>Date Wear</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
