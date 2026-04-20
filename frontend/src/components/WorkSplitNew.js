import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './WorkSplitNew.css';

const WorkSplitNew = () => {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ['start end', 'end start'],
  });

  const words = "Engineers first evaluate the companies they talk about. The 20 percent is how Dash0 earns that conversation. The 80 percent is how it wins the evaluation that follows.".split(' ');

  return (
    <section className="work-split-simple">
      <div className="split-wrap-simple">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="split-title-simple"
        >
          THE WORK SPLIT
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="split-desc-simple"
        >
          <span className="percent">80%</span> goes to core PMM tasks like changelogs, positioning, sales enablement, blogs, website, competitive intelligence. <span className="percent">20%</span> goes to brand.
        </motion.p>

        {/* Scroll-filling text */}
        <div ref={textRef} className="scroll-fill-text">
          {words.map((word, index) => {
            const start = index / words.length;
            const end = (index + 1) / words.length;
            const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
            const isDash0 = word === 'Dash0';
            
            return (
              <motion.span
                key={index}
                style={{ 
                  opacity,
                  color: isDash0 ? '#b91c1c' : '#111'
                }}
              >
                {word}{' '}
              </motion.span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkSplitNew;
