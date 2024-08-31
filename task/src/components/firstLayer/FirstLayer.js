import React from 'react';
import imagePath from "../../assets/supply-chain-management.jpg"
import './FirstLayer.css';

const FirstLayerSection = () => (
    <section className="layerStyle row-sm-12 pb-5">

        <div className="feature-image col-sm-6">
            <img className="imgStyle1" src={imagePath} alt="Feature" />
        </div>

        <div className='col-sm-1'></div>

        <div className="feature col-sm-5">
            <h className='heading'> About Supply Chain Management</h>
            <p className='featureStyle'>Supply chain management (SCM) is a broader term that includes supply chain logistics as one of its elements. SCM involves overseeing the entire lifecycle of a product throughout the supply chain process, from the initial sourcing of materials to the final delivery of finished goods to consumers.</p>
            <ul>
                <li>procurement strategy</li>
                <li>product development</li>
                <li>production management and demand forecasting.</li>
            </ul>
        </div>

    </section>
);

export default FirstLayerSection;