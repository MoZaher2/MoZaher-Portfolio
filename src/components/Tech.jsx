import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <div className={`${styles.padding} w-full max-w-7xl mx-auto`}>
      <motion.div variants={textVariant(0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.50 }} >
        <p className={styles.sectionSubText}>What i have worked with</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      
      
      <div className='mt-20 flex flex-row flex-wrap justify-center gap-14'>
        {technologies.map((tech) => (
          <div className='w-28 h-28' key={tech.name}>
            <BallCanvas icon={tech.icon} name={tech.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tech