import React from 'react';
import "./Home.css"

function Home() {
  return (
    <div className='all-pages-contant'>
      <img src="../images/cctv-install.webp" alt="cctv" />
      <div className='home'>
        <h3 className='heading3'>Your Security</h3>
        <p className='par'>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Saepe sint autem, officiis debitis quos corrupti quas
          molestiae enim magni, maiores quo eum delectus reprehenderit quia animi, vero harum dignissimos eveniet?
        </p>
      </div>
      <div className='introduction'>
        <h3>Looking For A CCTV Security Service That Goes The Extra Mile?</h3>
        <p>With our diverse range of CCTV and imaging services, we can equip your business with a full CCTV security solution that can safeguard your site, assets and people against crime. From installation to monitoring services, our professional team can ensure there are always experts watching over your site 24/7/365.
          Whether you’re existing CCTV needs updating, you require proactive monitoring solutions or you’re looking for an entirely new system, we can help your organisation achieve its security objectives with our expert advice and CCTV services.
          In addition to our CCTV security solutions, we can also deploy sophisticated thermal imaging solutions to help defend your business against virus outbreaks, as well as deploying staff trained in social distancing supervision and ongoing workplace virus management.</p>
      </div>
      <div className='cctv-install'>
        <img src="../images/surveillance.jpg" alt="img" />
        <h1>CCTV Installation</h1>
        <p>CCTV Installation
          To support your CCTV installation, our specialist security technicians can carry out a full assessment of your site to establish the best installation strategy for you. No matter the size, location or type of your business, we can work directly with you to address your security needs, creating a comprehensive CCTV plan that increases camera coverage.
          With CCTV security, benefit from a simple but efficient security service, supported by 24/7 monitoring and a rapid response platform. CCTV can also help protect your business from misleading insurance claims and costly legal battles, supplying recorded footage that could be vital evidence in court proceedings.
        </p>
      </div>
    </div>
  )
}

export default Home;