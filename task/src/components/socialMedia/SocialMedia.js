import React from 'react';
import './SocialMedia.css';

import fbLogo from '../../assets/fbLogo.png';
import xLogo from '../../assets/xLogo.png';
import instaLogo from '../../assets/instaLogo.png';
import linkedInLogo from '../../assets/linkedinLogo.png';

const SocialMedia = () => (

    <footer className='socialmedialogo col-10'>
        <div className="social-media">
            <img src={fbLogo} alt="Facebook" />
            <img src={xLogo} alt="Twitter" />
            <img src={instaLogo} alt="Instagram" />
            <img src={linkedInLogo} alt="LinkedIn" />
        </div>
    </footer>
);

export default SocialMedia;