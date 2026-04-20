import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './FerrariVision.css';

const FerrariVision = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section className="ferrari-vision">
      {/* Parallax background */}
      <motion.div
        className="ferrari-background"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/33438079/pexels-photo-33438079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
          scale: scale,
        }}
      />

      <div className="ferrari-overlay" />

      <div className="ferrari-content">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="ferrari-title"
        >
          Dash0 on a Ferrari.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="ferrari-text"
        >
          <p>
            This one is mine. It's the thought I kept coming back to every time I saw Dash0's red jumpsuits over the last year, and it ties the two halves of who I am into one idea.
          </p>
          <p>
            A Ferrari SF-25 produces roughly <strong>1.1 million telemetry data points per second</strong>. ECU data flows through ATLAS, the McLaren Electronic Systems layer every team on the grid is mandated to use. Everything downstream, from the pit wall dashboards to the factory side analysis back in Maranello, is built on each team's own stack of custom tooling, compute partners, and in house code stitched together over decades.
          </p>
          <p>
            My vision is <strong>Dash0 sitting inside Ferrari's stack</strong>. ATLAS stays, because it has to. Everything downstream is where Dash0 lives. The telemetry backbone. The pit wall dashboards. The post session analysis. The correlation between race data and Maranello's simulator runs.
          </p>
          <p>
            The colours already match. The speed of growth at Dash0 is comparable to that of an F1 race car. An ex-racer on the marketing team sending the first email doesn't hurt either.
          </p>
          <p className="ferrari-closing">
            This is challenging, and that's why I find it so exciting.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FerrariVision;
