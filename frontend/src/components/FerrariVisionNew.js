import React from 'react';
import { motion } from 'framer-motion';
import './FerrariVisionNew.css';

const FerrariVisionNew = () => {
  return (
    <section className="ferrari-new">
      <div
        className="ferrari-bg-new"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/33438079/pexels-photo-33438079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
        }}
      />

      <div className="ferrari-dark-new" />

      <div className="ferrari-main-new">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="ferrari-h2-new"
        >
          DASH0 ON A FERRARI.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="ferrari-content-new"
        >
          <p>
            A Ferrari SF-25 produces <strong>1.1 million telemetry data points per second</strong>. Everything downstream from ATLAS (the McLaren Electronic Systems layer) is built on custom tooling stitched together over decades.
          </p>
          <p>
            My vision: <strong>Dash0 sitting inside Ferrari stack</strong>. The telemetry backbone. The pit wall dashboards. The post-session analysis. The correlation between race data and Maranello simulator runs.
          </p>
          <p className="ferrari-close-new">
            The colors match. The speed of growth at Dash0 is comparable to an F1 race car. An ex-racer on the marketing team sending the first email does not hurt either. This is challenging, and that is why I find it so exciting.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FerrariVisionNew;
