import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { BsFillTelephoneFill, BsFillGeoAltFill, BsEnvelope } from "react-icons/bs";
import Footerlogo from '../images/footer-logo.jpeg';

const footer = () => {
  return (
    <div>
       <div className="footer-wrap">
        <div className="container">
          <div className="row mb-5">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="footer-content">
                <div className="logo">
                <Link to='/'><img src={Footerlogo} alt="logo" /></Link>
                </div>
                <div className="footer-info">
                  <p>Our design professionals are equipped to help you determine
                  the products and design that work best.</p>
                </div>
                <div className="imp-icons">
                  <ul className='footer-icons d-flex align-items-center'>
                    <li><Link to="" className='foot-links'><BsInstagram/></Link></li>
                    <li><Link to="" className='foot-links'><BsLinkedin/></Link></li>
                    <li><Link to="" className='foot-links'><BsTwitter/></Link></li>
                    <li><Link to="" className='foot-links'><BsFacebook/></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="footer-content foot-data foot-data-center">
                <h3>Information</h3>
                <ul className='footer-list'>
                  <li><Link to="" className='foot-links'>About our Company</Link></li>
                  <li><Link to="" className='foot-links'>View our Services</Link></li>
                  <li><Link to="" className='foot-links'>Careers At Company</Link></li>
                  <li><Link to="" className='foot-links'>Our Latest Projects</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="footer-content foot-data foot-data-center">
              <h3>Portfolio</h3>
                <ul className='footer-list'>
                  <li><Link to="" className='foot-links'>Luxury Home Design</Link></li>
                  <li><Link to="" className='foot-links'>Residential Interior</Link></li>
                  <li><Link to="" className='foot-links'>Office Interior</Link></li>
                  <li><Link to="" className='foot-links'>Restoration Design</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="footer-content foot-data ">
                <div className="footer-contact">
                  <h3>Contact us</h3>
                  <div className="footer-content-item footer-list">
                    <div className="icon-box">
                      <span><BsFillTelephoneFill className='icon' /></span>
                    </div>
                    <div className="content-item-info">
                      <p>+1 (213) 465 789</p>
                    </div>
                  </div>
                  <div className="footer-content-item">
                    <div className="icon-box">
                      <span><BsEnvelope className='icon'/></span>
                    </div>
                    <div className="content-item-info">
                      <p>info@domain.com</p>
                    </div>
                  </div>
                  <div className="footer-content-item">
                    <div className="icon-box">
                      <span><BsFillGeoAltFill className='icon'/></span>
                    </div>
                    <div className="content-item-info">
                      <p> Genera 54, Mysłowice 41-412</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-border"></div>
          <p className='footer-end'>Copyright © 2025 All Rights Reserved / Designed by Inspired Interior Group</p>
        </div>
      </div>
    </div>
  )
}

export default footer
