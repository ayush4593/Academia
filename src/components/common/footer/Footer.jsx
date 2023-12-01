import React from  "react"
import { blog } from "../../about/dummydata"
import  "./footer.css"
import {Link} from 'react-router-dom'


const Footer = () => {
    return (
      <>
        <section className='newletter'>
          <div className='container flexSB'>
            <div className='left row'>
              <h1>Newsletter - Stay tune and get the latest update</h1>
              <span>Far far away, behind the word mountains</span>
            </div>
            <div className='right row'>
              <input type='text' placeholder='Enter email address' />
              <i className='fa fa-paper-plane'></i>
            </div>
          </div>
        </section>
        <footer>
          <div className='container padding'>
            <div className='box logo'>
              <h1>ACADEMIA</h1>
              <span>ONLINE EDUCATION & LEARNING</span>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
  
              <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-instagram icon'></i>
            </div>
            <div className='box link'>
              <h3>Explore</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/blog">Blog</Link></li>
               <li><Link to="/contact us">Contact Us</Link></li>
              </ul>
            </div>
            <div className='box link'>
              <h3>Quick Links</h3>                           
              <ul>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/terms & conditions">Terms & Conditions</Link></li>
                <li><Link to="/privacy">Privacy</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
              </ul>
            </div>
            <div className='box'>
              <h3>Recent Post</h3>
              {blog.slice(0, 3).map((val) => (
                <div className='items flexSB'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='text'>
                    <span>
                      <i className='fa fa-calendar-alt'></i>
                      <label htmlFor=''>{val.date}</label>
                    </span>
                    <span>
                      <i className='fa fa-user'></i>
                      <label htmlFor=''>{val.type}</label>
                    </span>
                    <h4>{val.title.slice(0, 40)}...</h4>
                  </div>
                </div>
              ))}
            </div>
            <div className='box last'>
              <h3>Have a Questions?</h3>
              <ul>
                {/* <li>
                   <i className='fa fa-map'></i>
                  
                </li>  */}
                <li>
                  <i className='fa fa-phone-alt'></i>
                  91 8678076594
                </li>
                <li>
                  <i className='fa fa-paper-plane'></i>
                  ayushkumar4593@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <div className='legal'>
          <p>
            Copyright ©2023 All rights reserved | This template is made with <i className='fa fa-heart'></i> by Pranab Bhardwaj
          </p>
        </div>
      </>
    )
  }
  
  export default Footer