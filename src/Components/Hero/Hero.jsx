import './Hero.css'
import React from 'react'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="row main-hero">
                    <div className="col-md-6 p-3">
                        <div className="main-heading">
                            <p className='display-5'>Turning Ideas Into Reality with Codefly Innovations</p>
                        </div>
                        <div className="description">
                            <p className='display-7'>At Codefly Innovations, we specialize in building fast and secure client applications that bring your ideas to life with innovative solutions.</p>
                        </div>
                        <div className="buttons mt-3">
                            <button type="button" className="btn btn-primary">Learn More</button>
                            <button type="button" className="btn btn-secondary">Sign Up</button>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" className="img-fluid" alt="Mountain Lake" />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Hero