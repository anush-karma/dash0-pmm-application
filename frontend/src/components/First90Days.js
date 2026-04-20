import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './First90Days.css';

const First90Days = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const phases = [
    {
      number: "00-30",
      title: "Absorb",
      subtitle: "Head down. Learn the product, the team, the motion.",
      items: [
        "Sit in on every product call I am allowed into",
        "Learn the product the way a user would, then the way a competitor would",
        "Start contributing to the changelog (ongoing)",
        "Plug into Kasper initiatives and get fluent in how growth moves at Dash0 (ongoing)",
      ],
    },
    {
      number: "30-60",
      title: "Sharpen",
      subtitle: "Enough context now to start contributing.",
      items: [
        "Build internal competitive intelligence that product, sales, and marketing can all pull from (ongoing)",
        "Audit the website end to end. Flag what is leaking. Prioritise what is fixable.",
        "Ship one blog. Product piece or competitor teardown. Possibly both.",
      ],
    },
    {
      number: "60-90",
      title: "Compound",
      subtitle: "Ready to pick up bigger pieces.",
      items: [
        "Take ownership of what the team needs most: sales decks, pitch decks, or product narratives.",
        "Propose the next quarter, mapped to product direction, growth vision, and business goals.",
      ],
    },
  ];

  return (
    <section className="first-90-days" ref={containerRef}>
      <div className="days-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="days-header"
        >
          What I'll start with.
        </motion.h2>

        <div className="timeline-wrapper">
          {/* Animated vertical line */}
          <div className="timeline-line-track">
            <motion.div
              className="timeline-line-fill"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline phases */}
          <div className="timeline-content">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                className="timeline-phase"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="phase-node">
                  <div className="phase-number">{phase.number}</div>
                </div>

                <div className="phase-content">
                  <h3 className="phase-title">{phase.title}</h3>
                  <p className="phase-subtitle">{phase.subtitle}</p>
                  <ul className="phase-items">
                    {phase.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default First90Days;
