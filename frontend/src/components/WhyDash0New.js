import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import './WhyDash0New.css';

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isTyping) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isTyping, text]);

  return (
    <motion.p
      className="why-sign-final"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onViewportEnter={() => setIsTyping(true)}
    >
      {displayText}
    </motion.p>
  );
};

const WhyDash0New = () => {
  return (
    <section className="why-dash0-final">
      <div className="why-wrap-final">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="why-image-final"
        >
          <img
            src="https://customer-assets.emergentagent.com/job_f5d99f2b-70a2-484a-984e-5ef73fab6ea3/artifacts/mpleoley_Gemini_Generated_Image_x3cek9x3cek9x3ce%20%281%29.png"
            alt="Anushka climbing"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="why-content-final"
        >
          <h2 className="why-title-final">WHY DASH0</h2>

          <div className="why-text-final">
            <p>
              I raced motorcycles 9 years ago, and the track left me with a lesson I have carried ever since. A rider only gets faster when the team and the bike are both better than they are.
            </p>
            <p>
              SigNoz got me ready for the rookie race. Dash0 has the ambition, the team, and the product to push me into the work I am capable of.
            </p>
            <TypewriterText text="Excited to go full throttle, again :)" delay={0.5} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDash0New;
