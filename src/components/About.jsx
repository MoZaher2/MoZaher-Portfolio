import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'


const ServiceCard = ({ index, title, describe, icon }) => {
  return (
    <Tilt
      className='xs:w-[250px] w-full'
      options={{
        max: 30,
        scale: 1.05,
        speed: 450
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.35 }}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-[0_15px_40px_-10px_rgba(139,92,246,0.3)] transition-shadow duration-300'
      >
        <div
          className='bg-tertiary rounded-[20px] py-6 px-5 min-h-[300px] flex flex-col items-center justify-between gap-4 border border-white/5'
        >
          {/* Circular/rounded wrapper for icon with subtle background */}
          <div className='w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner group transition-all duration-300 hover:bg-white/10 hover:border-violet-500/30'>
            <img src={icon} alt={title} className='w-10 h-10 object-contain select-none transition-transform duration-300 hover:scale-110' />
          </div>

          <div className='flex flex-col items-center gap-2 flex-grow justify-center'>
            <h3 className='text-white text-[19px] font-bold text-center leading-6 tracking-wide'>{title}</h3>
            <p className='text-secondary text-[13px] text-center leading-[20px] font-medium tracking-normal mt-1'>{describe}</p>
          </div>
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
      <motion.p variants={fadeIn("", "", 0.2, 1)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25 }} className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]'>
        Results-driven Frontend Developer with 1+ year of professional experience architecting scalable, highperformance web applications using React.js and Next.js. Proven track record delivering production-grade
        platforms — including a real estate SaaS, an AI-powered resume optimization tool, and a real-time crypto
        analytics app. Specializes in REST API integration, state management (Redux, Zustand, React Query), SSR/SSG
        optimization, and SEO strategies. Experienced in containerization with Docker and implementing CI/CD pipelines
        using GitHub Actions to streamline deployment and development workflows. Committed to clean, accessible, and
        maintainable code that drives measurable business outcomes..
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