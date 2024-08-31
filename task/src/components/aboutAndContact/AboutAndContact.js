import React from 'react';
import imagePath from '../../assets/logo.png'
import './AboutAndContact.css';

const AboutAndContact = () => (
    <section className="aboutStyle row-sm-12 pt-5 mt-5">

        <div className="col-sm-4">
            <img src={imagePath} alt='industryLogo' className="avatarStyle1" />
            <br />
            <p>To be the industry leader, globally recognized for effective & efficient solutions. To provide innovative solutions delivering quality, excellence and speed.</p>
        </div>

        <div className="col-sm-1"></div>

        <div className='col-md-3'>
            <h4 className='text-white'>Products</h4>
            <h6>Supply chain management</h6>
            <h6>Supply chain logistics</h6>
            <h6>Wharehousing</h6>
            <p>Frieght Forwarding</p>
        </div>

        <div className="col-md-2">
            <h4 className='text-white'>Resources</h4>
            <h6>Help center</h6>
            <h6>Support</h6>
            <h6>Partners</h6>
            <h6>Events</h6>
        </div>

        <div className="col-md-2">
            <h4 className='text-white'>company</h4>
            <h6>About us</h6>
            <h6>Privacy Policy</h6>
            <h6>carrers</h6>
            <h6>Accessibility</h6>
        </div>

    </section>
);

export default AboutAndContact;