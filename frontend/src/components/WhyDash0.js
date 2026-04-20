import React from 'react';
import { motion } from 'framer-motion';
import './WhyDash0.css';

const WhyDash0 = () => {
  return (
    <section className="why-dash0">
      <div
        className="why-background"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1516728513226-23c4045123a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwyfHxtb3RvcmN5Y2xlJTIwcmFjaW5nfGVufDB8fHx8MTc3NjU5NjYwNnww&ixlib=rb-4.1.0&q=85)',
        }}
      />

      <div className="why-overlay" />

      <div className="why-content">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="why-title"
        >
          Why Dash0
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="why-text"
        >
          <p>
            I used to race motorcycles. One lesson from 9 years ago has stayed with me: a rider only gets faster when the team and the bike are both better than they are.
          </p>
          <p>
            SigNoz got me ready for the rookie race. Dash0 has the ambition, the team, and the product to push me into creating my best work.
          </p>
          <p className="why-closing">
            Excited to go full throttle, again :)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="why-signature"
        >
          Anushka
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDash0;
