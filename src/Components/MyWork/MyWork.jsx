import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import github_icon from '../../assets/github_icon.svg';
import github_icon2 from '../../assets/github_icon2.svg';
import figma_icon from '../../assets/figma_icon.png';
import powerpoint from '../../assets/powerpoint.png';

const WorkItem = ({ work, theme }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="work-item"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <img src={work.w_img} alt="" className="work-img" />
      <div className="work-hover">
        <h2>{work.w_name}</h2>
        <p>{work.w_desc}</p>
        <p className="work-stack">{work.w_stack}</p>
        <div className="work-links">
          {work.w_figma && (
            <a href={work.w_figma} target="_blank" rel="noopener noreferrer">
              <img src={figma_icon} alt="Figma" className="icon" />
            </a>
          )}
          {work.w_powerpoint && (
            <a href={work.w_powerpoint} target="_blank" rel="noopener noreferrer">
              <img src={powerpoint} alt="PowerPoint" className="icon" />
            </a>
          )}
          {work.w_github && (
            <a href={work.w_github} target="_blank" rel="noopener noreferrer">
              <img src={theme === "light" ? github_icon2 : github_icon} alt="GitHub" className="github-icon" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const MyWork = ({ theme }) => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id='work' className='mywork'>
      <motion.div
        className="title-box"
        ref={titleRef}
        initial={{ opacity: 0, y: -50 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
      >
        <h1>Projects</h1>
      </motion.div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <WorkItem key={index} work={work} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default MyWork;