import React from 'react'
// import './Testimonial.css'
import './Testimonials.css';
import testimonials_data from '../assets/testimonials';

const Testimonials = () => {
  return (
    <div className='testimonial'>
        <div className='testimonial-container'>
            <div className='testimonials-line'>
            <hr />
            <p>✧</p>
            <hr/>
          </div>
            <h1 className='testimonial-title'>What do our customers say?</h1>
                <div className='testimonial-cards'>
                    {testimonials_data.map((data, index) => (
                        <div className='testimonial-card' key={index}>
                            <img src={data.image} alt={name} />
                            <h3>{data.name}</h3>
                            <p><span>"</span>{data.description}<span>"</span></p>
                        </div>
                    ))}
                </div>
            
            <div className='testimonials-line'>
                <hr />
                <p>✧</p>
                <hr/>
            </div> 
        </div>
    
        
    </div>
  )
}

export default Testimonials