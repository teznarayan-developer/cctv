import React from 'react';
import "./Home.css"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className='all-pages-contant'>
        <div className='head-image'>
          <img src="../images/cctv-install.webp" alt="cctv" />
        </div>
        <div className='home'>
          <h1 className='heading1'>Your Security</h1>
          <p >Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Saepe sint autem, officiis debitis quos corrupti quas
            molestiae enim magni, maiores quo eum delectus reprehenderit quia animi, vero harum dignissimos eveniet?
          </p>
        </div>
        <div className='introduction'>
          <h3 className='par'>Looking For A CCTV Security Service That Goes The Extra Mile?</h3>
          <p>With our diverse range of CCTV and imaging services, we can equip your business with a full CCTV security solution that can safeguard your site, assets and people against crime. From installation to monitoring services, our professional team can ensure there are always experts watching over your site 24/7/365.
            Whether you’re existing CCTV needs updating, you require proactive monitoring solutions or you’re looking for an entirely new system, we can help your organisation achieve its security objectives with our expert advice and CCTV services.
            In addition to our CCTV security solutions, we can also deploy sophisticated thermal imaging solutions to help defend your business against virus outbreaks, as well as deploying staff trained in social distancing supervision and ongoing workplace virus management.</p>
        </div>
        <div className='cctv-install'>
          <img src="../images/surveillance.jpg" alt="img" />
          <h1>CCTV Installation</h1>
          <p className='par'>CCTV Installation
            To support your CCTV installation, our specialist security technicians can carry out a full assessment of your site to establish the best installation strategy for you. No matter the size, location or type of your business, we can work directly with you to address your security needs, creating a comprehensive CCTV plan that increases camera coverage.
            With CCTV security, benefit from a simple but efficient security service, supported by 24/7 monitoring and a rapid response platform. CCTV can also help protect your business from misleading insurance claims and costly legal battles, supplying recorded footage that could be vital evidence in court proceedings.
          </p>
        </div>
        <div className='cctv-monitoring'>
          <img src="../images/cctv-monitoring.webp" alt="monitoring" />
          <h1>CCTV Monitoring</h1>
          <p className='par'>With a state-of-the-art CCTV facility monitoring your premises 24 hours a day, you have peace of mind that any criminal incidents will be confronted swiftly and effectively by our security professionals.
            Once correctly installed, CCTV systems can be used as a platform to launch an effective rapid response solution, allowing officers monitoring your site to deploy a team of first response officers or immediately contact the police, should an incident occur on your property.</p>
          <a href="" className='lern-button'>Lern more </a>
        </div>
        <section className='list-section'>
          <div className='list-holder'>
            <div className='list-details'>
              <div className='aling-center'>
                <img src="../images/peace-of-mind-cctv.webp" alt="peace" />
                <h3>Peace of Mind</h3>
                <p>Churchill Support Services can carry out an assessment of your property to determine the best CCTV installation strategy for optimal coverage and ultimate peace of mind.</p>
              </div>
              <div className='aling-center'>
                <img src="../images/cctv-security-available-24-7.webp" alt="peace" />
                <h3>Peace of Mind</h3>
                <p>Churchill Support Services can carry out an assessment of your property to determine the best CCTV installation strategy for optimal coverage and ultimate peace of mind.</p>
              </div>
              <div className='aling-center'>
                <img src="../images/cctv-security-consistent-monitoring.webp" alt="peace" />
                <h3>Peace of Mind</h3>
                <p>Churchill Support Services can carry out an assessment of your property to determine the best CCTV installation strategy for optimal coverage and ultimate peace of mind.</p>
              </div>
              <div className='aling-center'>
                <img src="../images/expert-cctv-security-team.webp" alt="peace" />
                <h3>Peace of Mind</h3>
                <p>Churchill Support Services can carry out an assessment of your property to determine the best CCTV installation strategy for optimal coverage and ultimate peace of mind.</p>
              </div>
              <div className='aling-center'>
                <img src="../images/mobile-patrols-cctv-security.webp" alt="peace" />
                <h3>Peace of Mind</h3>
                <p>Churchill Support Services can carry out an assessment of your property to determine the best CCTV installation strategy for optimal coverage and ultimate peace of mind.</p>
              </div>
              <div className='aling-center'>
                <img src="../images/peace-of-mind-cctv.webp" alt="peace" />
                <h3>Peace of Mind</h3>
                <p>Churchill Support Services can carry out an assessment of your property to determine the best CCTV installation strategy for optimal coverage and ultimate peace of mind.</p>
              </div>
            </div>
          </div>
        </section>
        <div>
          <h3>Case Studies & Testimonials</h3>
          <div className='case'>
            <div className='case-studies'></div>
            <div className='case-studie'></div>
            <div className='case-studi'></div>
            <div className='case-stud'></div>
          </div>
        </div>
        <div>
          <h3>View all case studie</h3>
        </div>
        <hr className='horizontal' />
        <div>
          <h2>Frequently Asked Questions</h2>
        </div>
        <hr className='Frequently-Asked-Questions-bottom' />
        <div className='get-in-touch-containt'>
          <div className='get-in-touch'>
            <div className='get-in-touch-head'>
              <h2>GET IN TOUCH TODAY</h2>
              <p>
                If you're looking for motivated, reliable and customer oriented security guards, choose Churchill Support Services today.
              </p>
              <p>
                Simply call us today on the free number listed above or complete our online form for a quick, no-obligation quote.
              </p>
              <div className='get-in-touch-head-icons'>
                <img src="../images/expert-cctv-security-team.webp" alt="cctv" />
                <img src="../images/expert-cctv-security-team.webp" alt="cctv" />
                <img src="../images/expert-cctv-security-team.webp" alt="cctv" />
              </div>
            </div>
          </div>
          <div className='get-in-touch'>
            <div className='get-in-touch-right'>
              <div className='get-in-touch-right-containt'>
                <h2>Request a Quote</h2>
              </div>
            </div>
          </div>
        </div>
        <hr className='horizontal-about' />
        <div className='about'>
          <img src="../images/cctv-about-img.jpg" alt="bullet-cctv" />
          <div className='about-containt'>
            <h3>About us</h3>
            <div className='about-link'>
              <a href="">DM</a>
              <a href="">CCTV</a>
            </div>
            <div className='about-link2'>
              <a href="">PC</a>
              <a href="">Laptop</a>
              <a href="">Computer</a>
              <a href="">Graphics</a>
              <a href="">DM</a>
            </div>
            <div className='about-link3'>
              <a href="">PC</a>
              <a href="">Laptop</a>
              <a href="">Computer</a>
              <a href="">Graphics</a>
              <a href="">DM</a>
            </div>
          </div>
          <div className='about-social-media'>
            <div className='about-social-media-link'>
              <a href="#"><img src="../images/facebook.png" alt="fb" /></a>
              <a href="#"><img src="../images/facebook.png" alt="fb" /></a>
              <a href="#"><img src="../images/facebook.png" alt="fb" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;