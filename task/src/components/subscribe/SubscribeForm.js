import React from 'react';
import './Subscribe.css';

const SubscribeForm = () => (
    <section className="subscribe-form row-12 mt-5">

        <div className='col-7'>
            <h3 className='d-flex'>Stay in the loop</h3>
            <p className='d-flex text-white'>Join our newsletter to get top news before anyone else.</p>
        </div>

        <div className=' col-5 align-content-center'>
            <form class="form-control d-flex justify-content-center row-12">
                <input type="email" placeholder="Your email" class="form-input col-sm-8" />
                <button type="submit" class="form-button col-sm-4 d-flex justify-content-center">Subscribe</button>
            </form>
        </div>

    </section>
);

export default SubscribeForm;