import React from 'react';
import './Home.css'; // Assuming you have your CSS styles in a file named Home.css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faGlobe, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="home">
      <img src="path_to_home-img_image" alt="Home Img" class="styled-image" />

      {/* Home Hero Section */}
      <section className="home-hero-bar">
        <div className="home-hero-content">
          <h2 className="home-hero-text">Looking for a first-class business consultant?</h2>
          <a href="/get-quote" className="home-hero-button">Get a Quote</a>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="image-grid-section">
        <div className="image-grid-container">
          <div className="image-grid-item">
            <div className="image-placeholder"></div>
            <div className="image-grid-caption">
              <FontAwesomeIcon icon={faChartLine} className="icon" />
              Why our consulting
            </div>
          </div>
          <div className="image-grid-item">
            <div className="image-placeholder"></div>
            <div className="image-grid-caption">
              <FontAwesomeIcon icon={faGlobe} className="icon" />
              Global consumer insights
            </div>
          </div>
          <div className="image-grid-item">
            <div className="image-placeholder"></div>
            <div className="image-grid-caption">
              <FontAwesomeIcon icon={faLightbulb} className="icon" />
              Thought Leadership
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="services-section">
        <div className="services-title-container">
          <h2 className="services-title">Services</h2>
        </div>
        <div className="services-cards">
          <div className="service-card">
            <div className="service-icon">
              <img src="https://via.placeholder.com/50x50.png?text=IT" alt="IT Consultancy" />
            </div>
            <h3>IT Consultancy</h3>
            <p>Astonished set expression solicitude way admiration</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src="https://via.placeholder.com/50x50.png?text=Cloud" alt="Cloud Computing" />
            </div>
            <h3>Cloud Computing</h3>
            <p>Astonished set expression solicitude way admiration</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src="https://via.placeholder.com/50x50.png?text=Cyber" alt="Cyber Security" />
            </div>
            <h3>Cyber Security</h3>
            <p>Astonished set expression solicitude way admiration</p>
          </div>
          <div className="service-card more-button-card">
            <button className="more-button">more button</button>
          </div>
        </div>
      </div>

      {/* SDG Solutions Section */}
      <div className="sdg-solutions-section">
        <div className="sdg-solutions-container">
          <div className="sdg-solutions-left">
            <h3>SDG Solutions Works On</h3>
            <h2>Easy & Perfect Solution With Latest Software Integrations</h2>
          </div>
          <div className="sdg-solutions-right">
            <div className="image-placeholder">[Image Placeholder]</div>
          </div>
        </div>
      </div>
      {/* help bar */}

      <div class="header-bar">
  <img src="path_to_header_image" alt="Header" class="header-image" />
  <div class="header-text">
    <h1>We're Here To Help</h1>
    <p>Power your team with setech</p>
  </div>
  <button class="help-button">Get help Here ➔</button>
</div>


      {/* Main Content Section */}
      <div className="main-content">
  <div className="content-text">
    <h2>SDG Solutions Cloud</h2>
    <h1>Unleash The Power Of Cloud With AWS Services</h1>
    <p>Amazon Web Services provides a wide range of cloud services for web development, which can help developers to build and deploy web applications with ease. Some of the AWS cloud services that are commonly used in web development include EC2, S3, CloudFront, RDS, Route53, API Gateway, Lambda Etc.,</p>
    <button className="explore-button">Explore</button>
  </div>
  {/* <!-- <div className="content-image">
    <img src="path_to_aws_image" alt="AWS Services" />
  </div> --> */}
</div>


      {/* Digital Marketing Section */}
      <div className="digital-marketing-section">
        <div className="digital-marketing-image">
          <img src="path_to_marketing_image" alt="Digital Marketing" />
        </div>
        <div className="digital-marketing-text">
          <h2>Digital Marketing</h2>
          <h1>Marketing & Sale Solutions To Grow Your Business</h1>
          <p>Creative marketing services can help grow your business in the local market by generating more awareness and interest in your products or services. Some effective strategies include:</p>
          <ul>
            <li>Branding</li>
            <li>Content Marketing</li>
            <li>Search Engine Optimization</li>
            <li>Social Media Marketing</li>
            <li>Email Marketing</li>
          </ul>
        </div>
      </div>

      {/* Left Content Section
      <div className="left-content">
        <img src="/sample-image.jpg" alt="Sample" className="left-image" />
      </div> */}

      {/* Form Section */}
      <div className="form-section">
        <div className="form-container">
          <div className="form-image">
            <img src="path_to_form_image" alt="Form" />
          </div>
          <div className="form-content">
            <h1>Get a Free Website Audit.</h1>
            <form>
              <div className="input-row">
                <input type="text" placeholder="Domain Name*" required />
                <input type="text" placeholder="Phone" />
              </div>
              <input type="email" placeholder="E-mail*" required />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
