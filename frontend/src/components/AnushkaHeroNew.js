import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './AnushkaHeroNew.css';

const AnushkaHeroNew = () => {
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="hero-new" ref={heroRef}>
      <div className="hero-content-new">
        {/* Top left genre-style pills */}
        <motion.div
          className="genre-pills"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="pill">FOUNDER</div>
          <div className="pill">SUCCESSFUL EXIT</div>
          <div className="pill">EX-RACER</div>
        </motion.div>

        {/* Top right - Application text */}
        <motion.div
          className="application-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          APPLICATION FOR PMM, DASH0
        </motion.div>

        {/* Left side text - like "TOM HOLLAND" */}
        <motion.div
          className="side-text left-text"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="text-item">5 YRS IN B2B</div>
          <div className="text-item">EX-SIGNOZ</div>
        </motion.div>

        {/* Right side text - NAME instead */}
        <motion.div
          className="side-text right-text name-text"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="name-line">ANUSHKA</div>
          <div className="name-line">KARMAKAR</div>
        </motion.div>

        {/* Central portrait with scale animation */}
        <motion.div
          className="hero-portrait-wrapper"
          style={{ scale: imageScale, opacity }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="portrait-glow" />
          <img
            src="https://customer-assets.emergentagent.com/job_f5d99f2b-70a2-484a-984e-5ef73fab6ea3/artifacts/n1j5t5h1_Gemini_Generated_Image_9adxk99adxk99adx.png"
            alt="Anushka Karmakar"
            className="hero-portrait-img"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AnushkaHeroNew;
