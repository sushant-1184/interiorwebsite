import React from 'react'
import $ from 'jquery';
import Serviceimg from '../images/service-2.jpeg';
import Commercialpj1 from '../images/gallery-1.jpeg';
import Commercialpj2 from '../images/gallery-2.jpeg';
import Commercialpj3 from '../images/gallery-3.jpeg';
import Commercialpj4 from '../images/gallery-4.jpeg';
import Commercialpj5 from '../images/gallery-5.jpeg';
import Commercialpj6 from '../images/gallery-6.jpeg';

import { Link } from 'react-router-dom';



$(function () {

  $('.project-item-link').on("click", function () {
    $(this).addClass('active').siblings().removeClass('active');

    let filter = $(this).attr('data-filter')
    if (filter === 'all') {
      $('.type').show(400);
    } else {
      $('.type').not('.' + filter).hide(200);
      $('.type').filter('.' + filter).show(400);
    }
  })
});

const Residentialpage = () => {
  return (
    <div>
      <section className="all-hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="section-title text-center">
              <h1>Residential Interior</h1>
              <h4 className="explore-btn">
                <Link to='/' className="home-btn">Home  </Link> / Residential Interior
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="commercial-hero">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-12 col-lg-6">
              <div className="commercial-img">
                <img src={Serviceimg} alt="" className='img-fluid' />
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="commercial-content">
                <div className="section-title ">
                  <h3>Our Residential Interior Design</h3>
                  <h2>Find your perfect  <span>home</span></h2>
                </div>
                <p>The extremely efficient and creative team at Interior have worked hard to bring us in the list of top commercal interior design companies in usa, especially Newyork. We produce commercial interior designs for all kinds of projects.</p>

                <p>From the creation of concepts to space planning leading to solutions, we take care of everything. Generate the most creative ideas and brands hence adding value to each interaction.Generate the most creative ideas and brands hence adding value to each interaction.</p>

                <div className="read-more-btn">
                  <Link to='/projectdetailspage' className="section-btn">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   
      <section className='commercial-project'>
        <div className="container-fluid">
          <div className="commercial-project-wrap">
            <div className="section-title ph">
              <h2>Residential <span>Projects</span></h2>
            </div>
            <ul className="project-list">
              <li className='project-item-link active' data-filter="all">All</li>
              <li className='project-item-link' data-filter="cat1">Living Room</li>
              <li className='project-item-link' data-filter="cat2">Kitchan</li>
              <li className='project-item-link' data-filter="cat3">Hotel</li>
              <li className='project-item-link' data-filter="cat4">Designs</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 type cat1">
              <div className="service-item">
                <div className="service-item-data">
                  <div className="commercial-pj-img">
                    <img src={Commercialpj1} alt="" />
                  </div>
                  <div className="service-info commercial-pj">
                    <p className='m-0'>Residential</p>
                    <h3><Link to='/projectdetailspage' className='service-item-link'>Modern Cafeteria Zone</Link></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 type cat2">
              <div className="service-item">
                <div className="service-item-data">
                  <div className="commercial-pj-img">
                    <img src={Commercialpj2} alt="" />
                  </div>
                  <div className="service-info commercial-pj">
                    <p className='m-0'>Residential</p>
                    <h3><Link to='/projectdetailspage' className='service-item-link'>Office Room</Link></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 type cat4">
              <div className="service-item">
                <div className="service-item-data">
                  <div className="commercial-pj-img">
                    <img src={Commercialpj3} alt="" />
                  </div>
                  <div className="service-info commercial-pj">
                    <p className='m-0'>Residential</p>
                    <h3><Link to='/projectdetailspage' className='service-item-link'>Modern Designs</Link></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 type cat1">
              <div className="service-item">
                <div className="service-item-data">
                  <div className="commercial-pj-img">
                    <img src={Commercialpj4} alt="" />
                  </div>
                  <div className="service-info commercial-pj">
                    <p className='m-0'>Residential</p>
                    <h3><Link to='/projectdetailspage' className='service-item-link'>Modern Living Room</Link></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 type cat2">
              <div className="service-item">
                <div className="service-item-data">
                  <div className="commercial-pj-img">
                    <img src={Commercialpj5} alt="" />
                  </div>
                  <div className="service-info commercial-pj">
                    <p className='m-0'>Residential</p>
                    <h3><Link to='/projectdetailspage' className='service-item-link'>Meeting Area</Link></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 type cat3">
              <div className="service-item">
                <div className="service-item-data">
                  <div className="commercial-pj-img">
                    <img src={Commercialpj6} alt="" />
                  </div>
                  <div className="service-info commercial-pj">
                    <p className='m-0'>Residential</p>
                    <h3><Link to='/projectdetailspage' className='service-item-link'>Hotel Tables</Link></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="services-btn">
              <Link to='/project' className="section-btn">See All Projects</Link>
            </div>
          </div>
        </div>
      </section>
      <section className='pricing-secion'>
        <div className="container-fluid">
          <div className="commercial-project-wrap">
            <div className="section-title ph">
              <h2>Pricing <span>Planes</span></h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="pricing-details">
                <div className="price-box-heading">
                  <h3>LITE PLAN</h3>
                </div>
                <div className="price">
                  <h1><span>$ </span> 49<span>/ Mo</span></h1>
                </div>
                <ul className='pricing-list'>
                  <li>5 New Concepts</li>
                  <li>10 New Project Designs</li>
                  <li>5 Free Installation</li>
                  <li>Free Lifetime Support</li>
                </ul>
                <div className="price-btn">
                  <Link to='/shop' className="section-btn">PURCHASE</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="pricing-details">
                <div className="price-box-heading">
                  <h3>PRO PLAN</h3>
                </div>
                <div className="price">
                  <h1><span>$ </span> 59<span>/ Mo</span></h1>
                </div>
                <ul className='pricing-list'>
                  <li>7 New Concepts</li>
                  <li>20 New Project Designs</li>
                  <li>7 Free Installation</li>
                  <li>Free Lifetime Support</li>
                </ul>
                <div className="price-btn">
                  <Link to='/shop' className="section-btn">PURCHASE</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="pricing-details">
                <div className="price-box-heading">
                  <h3>SPECIAL PLAN</h3>
                </div>
                <div className="price">
                  <h1><span>$ </span> 79<span>/ Mo</span></h1>
                </div>
                <ul className='pricing-list'>
                  <li>9 New Concepts</li>
                  <li>25 New Project Designs</li>
                  <li>9 Free Installation</li>
                  <li>Free Lifetime Support</li>
                </ul>
                <div className="price-btn">
                  <Link to='/shop' className="section-btn">PURCHASE</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="pricing-details">
                <div className="price-box-heading">
                  <h3>FEATURED</h3>
                </div>
                <div className="price">
                  <h1><span>$ </span> 99<span>/ Mo</span></h1>
                </div>
                <ul className='pricing-list'>
                  <li>12 New Concepts</li>
                  <li>30 New Project Designs</li>
                  <li>10 Free Installation</li>
                  <li>Free Lifetime Support</li>
                </ul>
                <div className="price-btn">
                  <Link to='/shop' className="section-btn">PURCHASE</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Residentialpage
