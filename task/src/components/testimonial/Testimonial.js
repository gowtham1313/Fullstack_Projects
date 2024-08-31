import React from 'react';
import './Testimonial.css';

const testimonials = [
    {
        avatar: 'data:image/jpeg;base64,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',
        companyName: 'DHL Supply Chain',
        country: 'Germany',
        text: "DHL Supply Chain offers something called ‘Integrated Solutions’, to “extend efficiency, flexibility, and cost benefits to the entire end-to-end supply chain”. It draws together services including transport, warehousing and management into an “optimised package that ensures supply chain operations are simplified and your business becomes stronger and more efficient”.",
    },
    {
        avatar: 'data:image/png;base64,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',
        companyName: 'UPS Supply Chain Solutions',
        country: 'USA',
        text: "UPS Worldwide Logistics is a leader in the development and implementation of the 4PL business model. UPS offers full supply chain integration and access to real-time data that allows for strategic decision-making. The company says: “Our supply chain expertise, end-to-end services and value-added solutions are designed to scale with growing businesses and help them grow even faster.",
    },
    {
        avatar: 'data:image/png;base64,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',
        companyName: ' Kuehne + Nagel',
        country: 'Switzerland',
        text: "Kuehne+Nagel offer a 4PL solution that is “an integrated ecosystem built on 20 years’ experience at maximising value in our customers’ supply chains and applying these lessons to our service offerings”. The  ecosystem “is enabled by core values and technologies which power our ability to support our customers”. The solution is called ControLOG, which offers real-time visibility across the supply chain",
    },
];

const Testimonial = () => {
    return (
        <div>

            <div>
                <h2>WORLD'S TOP 3 SUPPLY CHAIN LOGISTICS CORPORATIONS</h2>
                <p className='mt-3'>Three years of supply chain volatility has seen a general shift towards 3PL, because 3PL is geared towards asset ownership, which provides more stability.<br />Below is a list of leading 4PL providers from across the world.</p>
            </div>

            <div className="container">
                {testimonials.map((testimonial, index) => (

                    <div key={index} className="card">
                        <img src={testimonial.avatar} alt={testimonial.companyName} className="avatarStyle" />
                        <p className="textStyle">{testimonial.text}</p>
                        <hr />
                        <div className='d-flex'>
                            <strong>{testimonial.companyName}</strong>
                            <p className="countryStyle">{testimonial.country}</p>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    );
};

export default Testimonial;
