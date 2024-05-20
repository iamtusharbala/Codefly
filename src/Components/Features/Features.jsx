import './Features.css'
import React from 'react'

const Features = () => {
    return (
        <div className='features'>
            <div className="container">
                <div className="row main-hero">
                    <div className='col-md-6'>
                        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" className="img-fluid" alt="Mountain Lake" />
                    </div>
                    <div className="col-md-6 p-3">
                        <div className="main-heading">
                            <p className='h3 display-7'>Custom App Development</p>
                        </div>
                        <div className="description">
                            <p className='display-7'>We provide custom app development services tailored to your specific needs. Our team of experienced developers will work closely with you to create high-quality, secure, and user-friendly applications.</p>
                        </div>

                        <div className="main-heading">
                            <p className='h3 display-7'>IT Consultancy</p>
                        </div>
                        <div className="description">
                            <p className='display-7'>Our IT consultancy services offer expert advice and guidance to help you make informed decisions about your technology infrastructure. We'll assess your current systems, identify areas for improvement, and recommend solutions that align with your business goals.</p>
                        </div>


                        <div className="main-heading">
                            <p className='h3 display-7'>System Integration Services</p>
                        </div>
                        <div className="description">
                            <p className='display-7'>Our system integration services streamline your business processes by connecting disparate systems and applications. We'll ensure seamless data flow, improve efficiency, and enhance collaboration across your organization.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features