import React from 'react';
import '../assets/css/footer.css';
import facebook from '../assets/images/facebook.webp'
import instagram from '../assets/images/instagram.webp'
import x from '../assets/images/x.webp'
import youtube from '../assets/images/youtube.webp'
import pinterest from '../assets/images/pinterest.webp'
import snapchat from '../assets/images/snapchat.webp'
import tiktok from '../assets/images/tiktok.webp'
import linkedin from '../assets/images/linkedin.webp'
import ios from '../assets/images/ios.png'
import android from '../assets/images/android.png'
import visa from '../assets/images/visa.webp'
import mastercard from '../assets/images/mastercard.webp'
import maestro from '../assets/images/maestro.webp'
import americaexpress from '../assets/images/americaexpress.webp'
import dinners from '../assets/images/dinners.webp'
import discover from '../assets/images/discover.webp'
import cabal from '../assets/images/cabal.webp'
import applepay from '../assets/images/applepay.webp'
import pse from '../assets/images/pse.webp'
import trustwave from '../assets/images/trustwave.png'
import dmca from '../assets/images/DMCA.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <div className='footer-link'>
          <div>
            <h5>COMPANY INFO</h5>
            <ul>
              <li>About SHEIN</li>
              <li>Fashion Blogger</li>
              <li>Social Responsibility</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h5>HELP & SUPPORT</h5>
            <ul>
              <li>Shipping Info</li>
              <li>Returns</li>
              <li>Refund</li>
              <li>How To Order</li>
              <li>How To Track</li>
              <li>Size Guide</li>
              <li>SHEIN VIP</li>
            </ul>
          </div>
          <div>
            <h5>CUSTOMER CARE</h5>
            <ul>
              <li>Contact us</li>
              <li>Payment Method</li>
              <li>Bonus Point</li>
              <li>Klarna</li>
            </ul>
          </div>
        </div>
        <div>
          <p>&copy; 2009-2024 SHEIN All Rights Reserved</p>
          <p><a href="#">Privacy Center</a> | <a href="#">Privacy & Cookie Policy</a> | <a href="#">Manage Cookies</a> | <a href="#">Terms & Conditions</a> | <a href="#">Marketplace IP Rules</a> | <a href="#">IP Notice</a> | <a href="#">Imprint</a> | <a href="#">Ad Choice</a> | <a href="#">Nigeria</a></p>
        </div>
      </div>
      <div>
        <div className='footer-right'>
        <div>
        <h5>FIND US ON</h5>
        <ul>
          <li><a href="#"><img src={facebook} alt="facebook" /></a></li>
          <li><a href="#"><img src={instagram} alt="instagram" /></a></li>
          <li><a href="#"><img src={x} alt="x" /></a></li>
          <li><a href="#"><img src={youtube} alt="youtube" /></a></li>
          <li><a href="#"><img src={pinterest} alt="pinterest" /></a></li>
          <li><a href="#"><img src={snapchat} alt="snapchat" /></a></li>
          <li><a href="#"><img src={tiktok} alt="tiktok" /></a></li>
          <li><a href="#"><img src={linkedin} alt="linkedin" /></a></li>
        </ul>
        </div>
        <div>
          <h5>APP</h5>
          <ul>
            <li><a href="#"><img src={ios} alt="ios" /></a></li>
            <li><a href="#"><img src={android} alt="android" /></a></li>
          </ul>
        </div>
        </div>
        <div className='signup'>
          <h5>SIGN UP FOR SHEIN STYLE NEWS</h5>
          <input type="text" 
            placeholder='Your Email Address'
          />
          <button>Subscribe</button>
          <input type="text" 
            placeholder='WhatsApp Account'
          />
          <button>Subscribe</button>
          <p>By clicking the SUBSCRIBE button, you are agreeing to our <a href="#">Privacy & Cookie Policy</a></p>
          <h5>WE ACCEPT</h5>
          <div className="payment">
            <img src={visa} alt="visa" />
            <img src={mastercard} alt="mastercard" />
            <img src={maestro} alt="maestro" />
            <img src={americaexpress} alt="americaexpress" />
            <img src={dinners} alt="dinners" />
            <img src={discover} alt="discover" />
            <img src={cabal} alt="cabal" />
            <img src={applepay} alt="applepay" />
            <img src={pse} alt="pse" />
            <img src={trustwave} alt="trustwave" />
            <img src={dmca} alt="dmca" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
