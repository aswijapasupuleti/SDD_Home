import React from 'react';
import './Home.css'; // Assuming you have your CSS styles in a file named Home.css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faGlobe, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import ChartImage from './images/imagegrid1.jpg'; // Make sure to update the path
import GlobeImage from './images/imagegrid2.jpg'; // Make sure to update the path
import LightbulbImage from './images/imagegrid3.jpg';
import digital from './images/digital.jpg';
import form from './images/form.jpg'

const Home = () => {
  return (
    <div className="home">
      

      {/* <!-- Home Hero Section --> */}
<section className="home-hero-bar">
  <div className="home-hero-content">
    <h2 className="home-hero-text">Looking for a first-class business consultant?</h2>
    <a href="/get-quote" className="home-hero-button">Get a Quote</a>
  </div>
</section>


<section className="image-grid-section">
    <div className="image-grid-container">
      <div className="image-grid-item">
        <div className="image-placeholder">
          <img src={ChartImage} alt="Chart" />
        </div>
        <div className="image-grid-caption">
          <FontAwesomeIcon icon={faChartLine} className="icon" />
          Why our consulting
        </div>
      </div>
      <div className="image-grid-item">
        <div className="image-placeholder">
          <img src={GlobeImage} alt="Globe" />
        </div>
        <div className="image-grid-caption">
          <FontAwesomeIcon icon={faGlobe} className="icon" />
          Global reach
        </div>
      </div>
      <div className="image-grid-item">
        <div className="image-placeholder">
          <img src={LightbulbImage} alt="Lightbulb" />
        </div>
        <div className="image-grid-caption">
          <FontAwesomeIcon icon={faLightbulb} className="icon" />
          Innovative solutions
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
        <img src="data:image/png;base64,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" alt="IT Consultancy" />
      </div>
      <h3>IT Consultancy</h3>
      <p>Astonished set expression solicitude way admiration</p>
    </div>
    <div className="service-card">
      <div className="service-icon">
        <img src="https://t4.ftcdn.net/jpg/02/14/21/95/240_F_214219533_Menq9ciAubWU5ShUkYq7VQGtXELJgmHt.jpg" alt="Cloud Computing" />
      </div>
      <h3>Cloud Computing</h3>
      <p>Astonished set expression solicitude way admiration</p>
    </div>
    <div className="service-card">
      <div className="service-icon">
        <img src="https://media.istockphoto.com/id/1311652639/vector/cyber-security-vector-logo-with-shield.jpg?s=612x612&w=0&k=20&c=hqT-XTJKJJr6FuC6P258m8zQVjmV04K89M8tdDqJTp0=" alt="Cyber Security" />
      </div>
      <h3>Cyber Security</h3>
      <p>Astonished set expression solicitude way admiration</p>
    </div>
    <button className="service-card more-button-card">
      more button
    </button>
  </div>
</div>


      {/* SDG Solutions Section */}
      <div className="sdg-solutions-section">
        <div className="sdg-solutions-container">
          <div className="sdg-solutions-left">
            <h3>SDG Solutions focuses on</h3>
            <h2>Delivering easy and perfect solutions through seamless integration with the latest software technologies.</h2>
          </div>
          <div className="sdg-solutions-right">
          <div className="image-placeholder">
  <img src="https://img.freepik.com/free-vector/app-development-concept-with-laptop_23-2148699364.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1717286400&semt=ais_user" alt="App Development Concept" />
</div>

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
      {/* <!-- Digital Marketing Section --> */}
<div className="digital-marketing-section">
  <div className="digital-marketing-image">
    <img src={digital} alt="Digital Marketing" />
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
            <img src={form} alt="Form" />
          </div>
          <div className="form-content">
            <h1>Get a Free Website Audit.</h1>
            <form>
              <div className="input-row">
                <input type="text" placeholder="Domain Name*" required />
               
              </div>
              <div className="input-row">
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
