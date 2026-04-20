import React from 'react';
import { motion } from 'framer-motion';
import './AnushkaHero.css';

const AnushkaHero = () => {
  return (
    <section className="anushka-hero">
      <div className="hero-container">
        {/* Left: Text content */}
        <div className="hero-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-eyebrow"
          >
            Application for PMM, Dash0
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-headline"
          >
            Built and sold a B2B tool.<br />
            GTM at ThriveStack.<br />
            First PMM at SigNoz.<br />
            Now here.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hero-subhead"
          >
            I'm Anushka. Five years in B2B, the last one spent inside observability. I know the category, I know what good positioning looks like when I see it, and I've been watching Dash0 build it for a year.
          </motion.p>
        </div>

        {/* Right: Comic book portrait */}
        <motion.div
            className="hero-right"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="hero-image-wrapper">
            <img
              src="https://customer-assets.emergentagent.com/job_f5d99f2b-70a2-484a-984e-5ef73fab6ea3/artifacts/n1j5t5h1_Gemini_Generated_Image_9adxk99adxk99adx.png"
              alt="Anushka Karmakar"
              className="hero-image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnushkaHero;
