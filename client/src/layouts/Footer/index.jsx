import React from 'react'
import './index.scss'


const Footer = () => {
  return (
    <footer className='footer section py-16'>
        <div className="footer-top grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-10">
            <div className=''>
                <img  className='footer-title' src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo2_footer.png" alt="" />
                <p>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
            </div>

            <div>
                <h4 className=' footer-title'>Quick Links</h4>
                <ul>
                    <li className=' footer-link'>About</li>
                    <li  className=' footer-link'>Offers & Discounts</li>
                    <li  className=' footer-link'>Get Coupon</li>
                    <li  className=' footer-link'>Contact Us</li>
                </ul>
            </div>

            <div>
                <h4 className=' footer-title'>New Products</h4>
                <ul>
                    <li className=' footer-link'>Woman Cloth</li>
                    <li  className=' footer-link'>Fashion Accessories</li>
                    <li  className=' footer-link'>Man Accessories</li>
                    <li  className=' footer-link'>Man Accessories</li>
                </ul>
            </div>

            <div>
                <h4 className=' footer-title'>New Products</h4>
                <ul>
                    <li className=' footer-link'>Frequently Asked Questions</li>
                    <li  className=' footer-link'>Terms & Conditions</li>
                    <li  className=' footer-link'>Privacy Policy</li>
                    <li  className=' footer-link'>Report a Payment Issue</li>
                </ul>
            </div>
            
        </div>
        <div className="footer-bottom  pt-16 flex-col md:flex-row gap-8 flex items-center justify-between">
            <p>Copyright ©2024 All rights reserved | This template is made with <i className="fa-solid fa-heart text-red-600"></i> by <span className=' cursor-pointer duration-300 text-red-600'>Mehi</span></p>
            <div className=' flex gap-3 text-black'>
                <button><i className="fa-brands fa-x-twitter"></i></button>
                <button><i className="fa-brands fa-facebook-f"></i></button>
                <button><i className="fa-brands fa-linkedin"></i></button>
                <button><i className="fa-solid fa-earth-americas"></i></button>
            </div>
        </div>
    </footer>
  )
}

export default Footer