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
            <p className={`${styles.heroSubText} mt-2 text-white-100`}> I &apos;m a web developer <br className="sm:block hidden" />(ReactJS • NextJS)
            </p>

            <div className="flex gap-6 mt-10 flex-col sm:flex-row items-stretch sm:items-center">
              {/* Social Media Links */}
              <div className="flex gap-4 text-[20px]">
                <a
                  href="https://github.com/MoZaher2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-tertiary border border-white/5 rounded-2xl flex justify-center items-center cursor-pointer hover:bg-white hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 ease-in-out"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-white group-hover:text-black transition-colors duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamedzaher-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-tertiary border border-white/5 rounded-2xl flex justify-center items-center cursor-pointer hover:bg-[#0077b5] hover:border-[#0077b5] hover:shadow-[0_0_20px_rgba(0,119,181,0.4)] transition-all duration-300 ease-in-out"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-white group-hover:text-white transition-colors duration-300" />
                </a>
                <a
                  href="https://wa.me/+201005138370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-tertiary border border-white/5 rounded-2xl flex justify-center items-center cursor-pointer hover:bg-[#25d366] hover:border-[#25d366] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 ease-in-out"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-white group-hover:text-white transition-colors duration-300" />
                </a>
              </div>

              {/* CV Action Buttons */}
              <div className="flex gap-3 items-center">
                {/* View CV */}
                <a
                  href="https://drive.google.com/file/d/1cXymcre-yc2ciCrpZwJItHxS07esUDJd/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-2xl hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all duration-300 ease-in-out cursor-pointer text-[15px] tracking-wide"
                >
                  <span>View CV</span>
                </a>

                {/* Download CV */}
                <a
                  href="/mohamed-zaher-cv.pdf"
                  download="Mohamed-Zaher-CV.pdf"
                  className="group flex items-center justify-center w-12 h-12 bg-tertiary border border-white/5 hover:border-violet-500/30 rounded-2xl hover:bg-white/5 transition-all duration-300 ease-in-out cursor-pointer"
                  title="Download CV"
                >
                  <FontAwesomeIcon icon={faDownload} className="text-secondary group-hover:text-white transition-colors duration-300 text-[18px]" />
                </a>
              </div>
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