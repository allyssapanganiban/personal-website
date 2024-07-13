import { motion } from 'framer-motion';
import circle from '../../assets/circle.png';
import './AnimatedCircles.css'

const circleVariants = {
    animate: {
      x: [0, 20, -20, 0],
      y: [0, -20, 20, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    }
  };
  
  const AnimatedCircles = () => (
    <>
        <motion.div className="circle circle1" variants={circleVariants} animate="animate" />
        <motion.div className="circle circle2" variants={circleVariants} animate="animate" />
        <motion.div className="circle circle3" variants={circleVariants} animate="animate" />
        <motion.div className="circle circle4" variants={circleVariants} animate="animate" />
        <motion.div className="circle circle5" variants={circleVariants} animate="animate" />
    </>
  );
  
  export default AnimatedCircles;