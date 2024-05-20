import './Benefits.css';
import React from 'react';

const Benefits = () => {
    return (
        <div className='benefits'>
            <div className="container">
                <div className="row main-hero">
                    <div className="col-md-6 p-3">
                        <div className="main-heading">
                            <p className='display-5'>Unlocking the Potential of Fast and Secure Client Applications</p>
                        </div>
                        <div className="description">
                            <p className='display-7'>At Codefly Innovations, we specialize in developing cutting-edge IT solutions that prioritize speed and security. Our team of experts is dedicated to creating client applications that deliver exceptional performance while ensuring the utmost protection of sensitive data.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>Speed</h4>
                                <p>Experience lightning-fast application performance that keeps your business ahead of the competition.</p>
                            </div>
                            <div className="col-lg-6">
                                <h4>Security</h4>
                                <p>Rest easy knowing that your valuable data is safeguarded with our robust security measures.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" className="img-fluid" alt="Mountain Lake" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;
