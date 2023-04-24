import React from 'react'
import './About.css'

function About() {
    return (
        <>
            <div className='all-pages-contant'>
                <hr />
                <div className='about-us'>
                    <h3>About us</h3>
                    <p>
                        Our story began in 2014, with a firm name Youth Engineer which provides a services of Computer Assembling and CCTV Installation. Later on , we moved towards all the more services such as EPABX and intercom, WIFI Repeaters, Biometric and Access Control, VDP, Solar, Air Conditioner. We also provide IT Software consulting and services such as website & applications development, digital marketing & branding a business with new startup named as Incretech Private Limited.
                    </p>
                </div>
                <div className='boxx'>
                    <div className='about-us-box'>
                        <div className='about-us-box-images'>
                            <div className='about-us-box-containt'>
                                <img src="../images/satish-salunkhe.png" alt="" />
                                <h2>Satish Salunkhe</h2>
                                <p>Co-Founder & Director</p>
                            </div>
                            <div className='about-us-box-containt'>
                                <img src="../images/ghanshyam-chavan.png" alt="" />
                                <h2>Ghanshyam Chavan</h2>
                                <p>Co-Founder & Director</p>
                            </div>
                            <div className='about-us-box-containt'>
                                <img src="../images/sameer-bhoir.png" alt="" />
                                <h2>Sameer Bhoir</h2>
                                <p>Managing Director</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='Vision-heading'>
                    <h2>Vision, Mission & Values</h2>
                </div>
                <div className='VMG-containt'>
                    <div className='Vision'>
                        <h3>Vision</h3>
                        <p>
                            To be a world-class provider of engineering and technology services, creating innovative solutions for our clients to help them succeed in the ever-evolving world.
                        </p>
                    </div>
                    <div className='Vision-pp'>
                        <h3>Mission</h3>
                        <p>
                            We strive to make our services accessible to all, providing our clients with comprehensive and reliable solutions. We also strive to deliver outstanding customer service, adding value to our clients through our expertise and commitment to excellence.
                        </p>
                    </div>
                    <div className='Vision'>
                        <h3>Goal</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem voluptatum est facere! Voluptatibus illum esse
                        </p>
                    </div>
                </div>
                <hr />
                <div>
                    <footer className='footerr'>
                        <h4>Copyright @ 2023</h4>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default About;