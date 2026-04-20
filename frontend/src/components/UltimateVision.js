import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './UltimateVision.css';

const UltimateVision = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const textInView = useInView(textRef, { once: true });
  const imageInView = useInView(imageRef, { once: true });

  return (
    <section className="ultimate-vision">
      <div className="vision-wrap">
        <motion.div
          ref={textRef}
          className="vision-content"
          initial={{ opacity: 0, x: -50 }}
          animate={textInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="vision-title">MY ULTIMATE VISION</h2>

          <div className="vision-text">
            <p>
              A Ferrari SF-25 produces <strong>1.1 million telemetry data points per second</strong>. Everything downstream from ATLAS (the McLaren Electronic Systems layer) is built on custom tooling stitched together over decades.
            </p>
            <p>
              My vision: <strong>Dash0 sitting inside Ferrari stack</strong>. The telemetry backbone. The pit wall dashboards. The post-session analysis. The correlation between race data and Maranello simulator runs.
            </p>
            <p>
              The colors match. The speed of growth at Dash0 is comparable to an F1 race car.
            </p>
            <p>
              This is challenging, and that is why I find it so exciting :)
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={imageRef}
          className="vision-image"
          initial={{ opacity: 0, x: 50 }}
          animate={imageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://customer-assets.emergentagent.com/job_f5d99f2b-70a2-484a-984e-5ef73fab6ea3/artifacts/bxccwjct_Gemini_Generated_Image_9o67xc9o67xc9o67.png"
            alt="Anushka in Ferrari racing suit"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default UltimateVision;
