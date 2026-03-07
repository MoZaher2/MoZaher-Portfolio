import { motion } from "framer-motion";
import { styles } from "../styles";
import MyPhoto from "../assets/my-photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <section className="relative w-full h-[980px] sm:h-screen max-w-7xl mx-auto overflow-hidden">
      <div className={`${styles.paddingX} absolute insert-0 top-[120px] flex sm:flex-row flex-col md:gap-11`}>
        <div className="flex flex-row items-start gap-5 mb-6">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 h-80 violet-gradient"></div>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I&apos;m <span className="text-[#915eff]">Mo Zaher</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}> I &apos;m a web developer <br className="sm:block hidden" />(FullStack)
            </p>

            <div className="flex gap-8 mt-10 flex-col sm:flex-row items-center">
              <div className="flex gap-8 text-[30px]">
                <a href="https://github.com/MoZaher2" target="_blank" rel="noopener noreferrer" >
                  <div className="w-[40px] h-[40px] bg-tertiary rounded-xl flex justify-center items-center cursor-pointer shadow-md shadow-[#915eff] transition-all duration-300 ease-in-out">
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                </a>
                <a href="https://linkedin.com/in/mohamed-zaher-83678a316" target="_blank" rel="noopener noreferrer">
                  <div className="w-[40px] h-[40px] bg-tertiary rounded-xl flex justify-center items-center cursor-pointer shadow-[#915eff] shadow-md transition-all duration-300 ease-in-out">
                    <FontAwesomeIcon icon={faLinkedin} className="text-blue-500" />
                  </div>
                </a>
                <a href="https://wa.me/+201005138370" target="_blank" rel="noopener noreferrer">
                  <div className="w-[40px] h-[40px] bg-tertiary rounded-xl flex justify-center items-center cursor-pointer shadow-[#915eff] shadow-md transition-all duration-300 ease-in-out">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-green-500" />
                  </div>
                </a>
              </div>
              <a href="https://drive.google.com/file/d/1cXymcre-yc2ciCrpZwJItHxS07esUDJd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <div className="w-[150px] h-[60px] bg-tertiary rounded-xl flex justify-between items-center cursor-pointer shadow-[#915eff] px-3 shadow-md transition-all duration-300 ease-in-out">
                  <p className="text-[40px] font-bold hover:text-[#915eff] hover:scale-110 duration-200 ">CV</p>
                  <a href="/public/Mohamed Zaher (CV).pdf" download="Mohamed Zaher (CV).pdf" className="border-l-2 pl-3">
                    <FontAwesomeIcon icon={faDownload} className="hover:text-[#915eff] hover:scale-110 text-[28px] duration-200" />
                  </a>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-1 md:justify-end justify-center items-center">
          <img src={MyPhoto} alt="my-photo" className="object-contain w-[400px] h-[400px]" style={{ filter: 'drop-shadow(0px 0px 8px #915eff)' }} />
        </div>
      </div>
      <div className="absolute bottom-1 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-tertiary  md:border-secondary flex justify-center items-start p-2">
            <motion.div animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className="w-3 h-3 rounded-full bg-tertiary md:bg-secondary"></motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero