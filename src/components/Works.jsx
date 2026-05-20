import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github, demo } from '../assets'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => (
  <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.20 }} >

    <div className='bg-tertiary p-5 rotate-2 hover:rotate-0 transition-all duration-300 ease-in-out rounded-2xl sm:w-[360px] w-full'>
      <div className='relative w-full h-[230px]'>
        <img src={image} alt={name} className='w-full h-full object-fill rounded-2xl' />
        <div className='absolute inset-0 flex justify-end m-2 gap-1'>
          <div onClick={() => window.open(source_code_link, '_blank')} className='black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out'>
            <img src={github} alt='github' className='w-2/3 h-2/3 object-contain' />
          </div>
          <div onClick={() => window.open(live_demo_link, '_blank')} className='bg-purple-800 w-9 h-9 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out'>
            <img src={demo} alt='live-demo' className='w-2/3 h-2/3 object-contain' />
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

    </div>

  </motion.div>
)
const Works = () => {
  return (
    <div className={`${styles.padding} w-full max-w-7xl mx-auto`}>
      <span id='projects' className='flex mb-24'></span>
      <motion.div variants={textVariant(0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.50 }} >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p variants={fadeIn('', '', 0.1, 1)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.50 }} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </div>
  )
}

export default Works

import PropTypes from "prop-types";
ProjectCard.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string
  })),
  image: PropTypes.string,
  source_code_link: PropTypes.string,
  live_demo_link: PropTypes.string
};