import React from 'react'
import './Experiences.css'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Experiences = () => {
  return (
    <div id='experiences' className='experiences'>
      <div className="title-box">
        <h1>Experiences</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      <div className="experiences-container">
        {Services_Data.map((service,index)=>{
          return <div key={index} className='experiences-format'>
             <h3>{service.s_no}</h3>
             <h2>{service.s_name}</h2>
             <p>{service.s_desc}</p>
             <div className='experiences-readmore'>
              <p>Read More</p>
              <img src={arrow_icon} alt="" />
             </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Experiences
