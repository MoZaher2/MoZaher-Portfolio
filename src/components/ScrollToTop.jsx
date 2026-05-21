import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="group fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-violet-600/80 backdrop-blur-md border border-violet-400/30 text-white cursor-pointer shadow-lg shadow-violet-600/20 hover:bg-violet-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-110 active:scale-95"
          title="Scroll to top"
        >
          <FontAwesomeIcon 
            icon={faArrowUp} 
            className="text-lg group-hover:-translate-y-1 transition-transform duration-300" 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
