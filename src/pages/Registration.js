import React from 'react'
import '../assets/css/registration.css'
import padlock from '../assets/images/padlock.png'
import facebook from '../assets/images/facebook.png'
import google from '../assets/images/google.png'
import pin from '../assets/images/pin.png'
import down from '../assets/images/down.png'

const Registration = () => {
  return (
    <div className='container'>
      <div className="sign-in">
      <h3>Sign In/Register</h3>
      
      <p className='data-protected'><img src={padlock} alt="padlock" className='padlock' />Your data is protected</p>
      
      <p className='coupon'>Get US$3 off coupon and more</p>
      <label>Mobile number or email address:</label>
      <input type="text" />
      <button className='continue'>CONTINUE</button>
      <p>Or</p>
      <button className='google'><img src={google} alt="google" />Continue with Google</button>
      <button><img src={facebook} alt="facebook" />Continue with Facebook</button>
      <button className='address'><img src={pin} alt="address" />Argentina <img src={down} alt="more" /></button>
      <p className='terms'>By continuing, you agree to our Privacy & Cookie Policy and Terms & Conditions.</p>
      </div>
    </div>
  )
}

export default Registration;
