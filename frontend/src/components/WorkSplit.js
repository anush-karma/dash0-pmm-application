import React from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import './WorkSplit.css';

const WorkSplit = () => {
  return (
    <section className="work-split">
      {/* Marquee background */}
      <div className="marquee-background">
        <Marquee speed={50} gradient={false}>
          <span className="marquee-text">
            80 PERCENT SHARPENS THE PRODUCT STORY · 20 PERCENT SHARPENS THE BRAND STORY · BOTH SHIP ·&nbsp;
          </span>
        </Marquee>
      </div>

      <div className="split-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="split-header"
        >
          80 / 20.
        </motion.h2>

        <div className="split-grid">
          {/* Left side: 80% */}
          <motion.div
            className="split-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="split-number">80</div>
            <div className="split-label">Core PMM</div>
          </motion.div>

          {/* Right side: 20% */}
          <motion.div
            className="split-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="split-number">20</div>
            <div className="split-label">Brand</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="split-body"
        >
          <p>
            80 percent of my time goes to core PMM tasks. Changelogs. Positioning. Sales enablement. Blogs. Website. Competitive intelligence.
          </p>
          <p>
            20 percent goes to brand. In dev tools, the company engineers talk about is often the one they evaluate. I'd love Dash0 to be that company.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="split-quote"
        >
          <p>
            80 percent sharpens the product story. 20 percent sharpens the brand story. Both ship.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSplit;
