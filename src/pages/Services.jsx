import React from 'react'
import { Link } from "react-router-dom";
import Workimg1 from '../images/icon-how-we-work-1.jpeg';
import Workimg2 from '../images/icon-how-we-work-2.jpeg';
import Workimg3 from '../images/icon-how-we-work-3.jpeg';
import Workimg4 from '../images/icon-how-we-work-4.jpeg';

import Serviceimg1 from '../images/service-1.jpeg';
import Serviceimg2 from '../images/service-2.jpeg';
import Serviceimg3 from '../images/service-3.jpeg';
import '../css/Services.css';

const Services = () => {
  return (
    <div>
      <section className="all-hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="section-title text-center">
              <h1>Services</h1>
              <h4 className="explore-btn">
                <Link to='/' className="home-btn">Home  </Link> / Services
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className='services'>
        <div className="container-fluid">
          <div className="row row-section align-items-center">
            <div className="col-md-6">
              <div className="service-work-title">
                <div className="section-title ">
                  <h3>Our services</h3>
                  <h2>Innovative design services for <span>every need</span></h2>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="section-para">
                <div className="section-title">
                  <p>We offer a range of bespoke interior design  services     tailored    to your unique needs. From  concept development to   final    installation.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="service-item">
                <div className="service-item-data">
                  <div className="service-img">
                    <img src={Serviceimg1} alt="" />
                  </div>
                  <div className="service-info">
                    <h3><Link to='' className='service-item-link'>Residential Interior  Design</Link></h3>
                    <p className='m-0'>We create personalized living    spaces that reflect your   style and functional needs. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-item">
                <div className="service-item-data">
                  <div className="service-img">
                    <img src={Serviceimg2} alt="" />
                  </div>
                  <div className="service-info">
                    <h3><Link to='/commercial' className='service-item-link'>Commercial interior design</Link></h3>
                    <p className='m-0'>Enhancing business environments with professional, functional, and aesthetically. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-item">
                <div className="service-item-data">
                  <div className="service-img">
                    <img src={Serviceimg3} alt="" />
                  </div>
                  <div className="service-info">
                    <h3><Link to='' className='service-item-link'>Furniture and Decor Selection</Link></h3>
                    <p className='m-0'>Our experts help you choose the perfect furniture and decor complement your style. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="work">
        <div className="container-fluid">
          <div className="row row-section">
            <div className="col-lg-6">
              <div className="service-work-title">
                <div className="section-title light-color">
                  <h3>How We Work</h3>
                  <h2>From concept to completion in <span>our work</span></   h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-para">
                <div className="section-title">
                  <p>Our comprehensive approach guides you through each phase of the design process, from initial brainstorming and conceptualization.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="work-content">
                <figure>
                  <img src={Workimg1} alt="workimage" />
                  <figcaption>
                    <div className="section-sub-data">
                      <h3 className='mb-2'>01. Initial Consultation</h3>
                      <p>We start with a one-on meeting to understand your vision preferences and requirement.</p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="work-content">
                <figure>
                  <img src={Workimg2} alt="workimage" />
                  <figcaption>
                    <div className="section-sub-data">
                      <h3 className='mb-2'>02. Design Planning</h3>
                      <p>This involves selecting materials, and layouts, furnishings, as well as creating 3D renderings.</p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="work-content">
                <figure>
                  <img src={Workimg3} alt="workimage" />
                  <figcaption>
                    <div className="section-sub-data">
                      <h3 className='mb-2'>03. Project Execution</h3>
                      <p>With the design plans in this place, we manage and coordinate all aspects of the projects.</p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="work-content">
                <figure>
                  <img src={Workimg4} alt="workimage" />
                  <figcaption>
                    <div className="section-sub-data">
                      <h3 className='mb-2'>04. Final Review</h3>
                      <p>After completing project we conduct a thorough walkthrough with you to review the space.</p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Services
