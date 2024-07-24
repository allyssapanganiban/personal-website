import React from 'react'
import './Experiences.css'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experiences = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.4,
        duration: 0.5,
      },
    }),
  };

  return (
    <div id='experiences' className='experiences'>
      <motion.div
        className="title-box"
        ref={titleRef}
        initial={{ opacity: 0, y: -50 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h1>Experiences</h1>
      </motion.div>
      <motion.div 
        className="experiences-container"
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
      >
        {Services_Data.map((service, index) => (
          <motion.div
            key={index}
            className='experiences-format'
            custom={index}
            variants={containerVariants}
          >
            <img src={service.s_pic} alt={service.s_name} className='experience-image' />
            <h3>{service.s_name}</h3>
            <h4>{service.s_no}</h4>
            <p>{service.s_desc}</p>
            <a href={service.s_link} target="_blank" rel="noopener noreferrer" className='experiences-group'>
              <p>{service.s_group}</p>
              <img src={arrow_icon} className='group-img' alt="Arrow Icon" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Experiences;
