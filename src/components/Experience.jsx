import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles"
import { experiences } from "../constants"
import { textVariant } from "../utils/motion"

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: "#E6DEDD" }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experience.icon} alt={experience.company_name} className='w-[70%] h-[70%] object-contain' />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {experience.title}
      </h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {
          experience.points.map((point, index) => (
            <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
              {point}
            </li>
          ))
        }
      </ul>
    </div>
  </VerticalTimelineElement>
)


const Experience = () => {
  return (
    <>
      <div className={`${styles.padding} w-full max-w-7xl mx-auto`}>
        <span id='education' className='flex mb-24'></span>
        <motion.div variants={textVariant(0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.50 }} >
          <p className={styles.sectionSubText}>What I have learned so far</p>
          <h2 className={styles.sectionHeadText}>Education & Training.</h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default Experience

import PropTypes from "prop-types";
ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    date: PropTypes.string,
    icon: PropTypes.string,
    company_name: PropTypes.string,
    title: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  }),
};