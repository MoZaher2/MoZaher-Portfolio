import { techSections } from '../constants';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <div className={`${styles.padding} w-full max-w-7xl mx-auto`}>
      <motion.div variants={textVariant(0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.50 }} >
        <p className={styles.sectionSubText}>What i have worked with</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className='mt-14 space-y-10'>
        {techSections.map((section, sectionIdx) => (
          <div key={section.title} className='flex flex-col gap-4'>
            <motion.h3
              variants={fadeIn("up", "spring", sectionIdx * 0.1, 0.5)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.2 }}
              className='text-white font-semibold text-[20px] tracking-wide border-l-4 border-violet-500 pl-3'
            >
              {section.title}
            </motion.h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6'>
              {section.items.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={fadeIn("up", "spring", index * 0.05, 0.5)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className='group relative bg-tertiary border border-white/5 rounded-3xl p-4 flex flex-col items-center justify-between gap-3 transition-all duration-300 hover:border-violet-500/30 hover:shadow-[0_10px_25px_-10px_rgba(139,92,246,0.3)] overflow-hidden cursor-default'
                >
                  {/* Glowing background gradient on hover */}
                  <div className='absolute inset-0 bg-gradient-to-br from-violet-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10' />

                  <div className='relative w-18 h-18 flex items-center justify-center bg-white/5 rounded-2xl border border-white/5 group-hover:border-violet-500/20 group-hover:bg-white/10 transition-all duration-300 p-3'>
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className='w-12 h-12 object-contain select-none transition-all duration-300 group-hover:scale-110 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_8px_16px_rgba(139,92,246,0.4)]'
                    />
                  </div>
                  <p className='text-secondary group-hover:text-white text-center text-sm font-medium leading-5 tracking-wide transition-colors duration-300'>{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;