import React from 'react';
import imagePath from "../../assets/img02.jpg"
import './SecondLayer.css';

const SecondLayerSection = () => (
    <section className="layerStyle row-sm-12">

        <div className="feature col-sm-5">
            {/* <p1 className='text-primary'>test</p1><br/> */}
            <h className='heading'>About Logistics</h>
            <p className='featureStyle'>Logistics is the process of coordinating how goods and products are obtained, stored and distributed. Manufacturers rely on logistics while overseeing complex operations in order to maintain efficiency, reduce costs and ensure that consumers’ needs are met.</p>
            {/* Due to the prominence of e-commerce companies, like Amazon, logistics embodies more than the actual movement of products from one place to another. */}
            <ul>
                <li>Transportation management systems</li>
                <li>Enterprise resource planning software</li>
                <li>Yard management and Warehouse management systems</li>
            </ul>
        </div>

        <div className='col-sm-1'></div>

        <div className="feature-image col-sm-6">
            <img className="imgStyle2" src={imagePath} alt="Feature" />
        </div>

    </section>
);

export default SecondLayerSection;