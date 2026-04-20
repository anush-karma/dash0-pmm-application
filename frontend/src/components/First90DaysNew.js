import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './First90DaysNew.css';

const First90DaysNew = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const phases = [
    {
      number: '00-30',
      title: 'ABSORB',
      tasks: [
        'Product calls',
        'Learn like a user, then like a competitor',
        'Changelog contributions',
        'Growth fluency with Kasper'
      ],
    },
    {
      number: '30-60',
      title: 'SHARPEN',
      tasks: [
        'Build competitive intelligence',
        'Audit website',
        'Ship one blog'
      ],
    },
    {
      number: '60-90',
      title: 'COMPOUND',
      tasks: [
        'Own sales/pitch decks',
        'Propose next quarter roadmap'
      ],
    },
  ];

  return (
    <section className="first-90-new" ref={containerRef}>
      <div className="days-wrap-new">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="days-title-new"
        >
          WHAT I WILL START WITH.
        </motion.h2>

        <div className="timeline-new">
          <div className="timeline-track-new">
            <motion.div
              className="timeline-fill-new"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="phases-new">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                className="phase-new"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="phase-marker-new">
                  <span>{phase.number}</span>
                </div>

                <div className="phase-info-new">
                  <h3 className="phase-name-new">{phase.title}</h3>
                  <ul className="phase-list-new">
                    {phase.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
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

export default First90DaysNew;
