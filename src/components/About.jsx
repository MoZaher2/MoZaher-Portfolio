import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'


const ServiceCard = ({ index, title, describe, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full' options={{
      max: 45,
      scale: 1,
      speed: 450
    }}>
      <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.35 }} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          className='bg-tertiary rounded-[20px] py-5 px-4 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          <p className='text-secondary'>{describe}</p>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <div className={`${styles.padding} w-full max-w-7xl mx-auto z-0`}>
      <span id='about' className='flex mb-24'></span>
      <motion.div variants={textVariant(0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.50 }} >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.2, 1)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25 }} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Web Developer | Graduate of Faculty of Computers and Information, Minia University (2024).
        A skilled web developer with extensive experience in building dynamic and responsive websites using HTML, CSS, JavaScript, TypeScript, React, NextJS and Node.js. Specialized in creating user-friendly interfaces and efficient backend systems, with a focus on delivering high-quality, scalable solutions tailored to client needs.
        Previously worked on developing a gym management website and a real estate website in Egypt, showcasing strong problem-solving skills and attention to detail. Experienced in collaborating with teams and meeting project deadlines efficiently.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 justify-center sm:justify-start'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default About



import PropTypes from "prop-types";
ServiceCard.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  describe: PropTypes.string,
  icon: PropTypes.node,
};