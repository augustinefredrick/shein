import React from 'react'
import '../assets/css/navbar.css'
import shein from '../assets/images/download.svg'
import search from '../assets/images/search.svg'
import user from '../assets/images/user.svg'
import cart from '../assets/images/cart.svg'
import like from '../assets/images/like.svg'
import headset from '../assets/images/headset.svg'
import network from '../assets/images/network.svg'
import banner from '../assets/images/small-banner.webp'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container'>
      <nav className='navbar'>
        <div className='shein-logo'>
        <Link to='/'><img src={shein} alt="shein logo" /></Link>
        </div>
        <div className="search">
          <input 
          type="text"
          placeholder="search..." 
          />
          <img src={search} alt="search" />
        </div>
        <div className="user">
          <Link to='/registration'><img src={user} alt="user" /></Link>
          <Link to='/cart'><img src={cart} alt="cart" /></Link> <span>0</span>
          <img src={like} alt="like" /> <span>0</span>
          <img src={headset} alt="headset" />
          <img src={network} alt="network" />
        </div>
      </nav>

      <div className="category">
        <ul>
          <li>Category</li>
          <li>New In</li>
          <li>Sale</li>
          <li><Link to='/shop'>Women Clothing</Link></li>
          <li>Kids</li>
          <li>Curve</li>
          <li>Men Clothing</li>
          <li>Underwear & Sleepwear</li>
          <li>Shoes</li>
          <li>Home & Kitchen</li>
          <li>Jewelry & Accessories</li>
          <li>Beauty & Health</li>
          <li>Baby & Maternity</li>
          <li>Sports & Outdoors</li>
          <li>Electronics</li>
          <li>Bags & Luggage</li>
          <li>Home Textiles</li>
          <li>Toys & Games</li>
          <li>Tools & Home Improvement</li>
          <li>Appliances</li>
          <li>Pet Supplies</li>
          <li>Office & School Supplies</li>
          <li>Automotive</li>
        </ul>
      </div>

      <div className="small-banner">
        <img src={banner} alt="banner" />
      </div>
    </div>
  )
}

export default Navbar;
