import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './WhatIStartWith.css';

const WhatIStartWith = () => {
  const sectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  // Section scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Card 1 - flies in from bottom-left
  const { scrollYProgress: card1Progress } = useScroll({
    target: card1Ref,
    offset: ['start end', 'center center']
  });
  const card1Y = useTransform(card1Progress, [0, 1], [120, 0]);
  const card1X = useTransform(card1Progress, [0, 1], [-60, 0]);
  const card1Opacity = useTransform(card1Progress, [0, 0.3, 1], [0, 1, 1]);
  const card1Scale = useTransform(card1Progress, [0, 0.5, 1], [0.85, 1, 1]);

  // Card 2 - flies in from bottom
  const { scrollYProgress: card2Progress } = useScroll({
    target: card2Ref,
    offset: ['start end', 'center center']
  });
  const card2Y = useTransform(card2Progress, [0, 1], [140, 0]);
  const card2Opacity = useTransform(card2Progress, [0, 0.3, 1], [0, 1, 1]);
  const card2Scale = useTransform(card2Progress, [0, 0.5, 1], [0.85, 1.05, 1]);

  // Card 3 - flies in from bottom-right
  const { scrollYProgress: card3Progress } = useScroll({
    target: card3Ref,
    offset: ['start end', 'center center']
  });
  const card3Y = useTransform(card3Progress, [0, 1], [120, 0]);
  const card3X = useTransform(card3Progress, [0, 1], [60, 0]);
  const card3Opacity = useTransform(card3Progress, [0, 0.3, 1], [0, 1, 1]);
  const card3Scale = useTransform(card3Progress, [0, 0.5, 1], [0.85, 1, 1]);

  return (
    <section ref={sectionRef} className="cine-details">
      <div className="details-wrap">
        <h2 className="details-title">WHAT WILL I START WITH</h2>

        <div className="details-media-row">
          <div className="media-center">
            <div className="arrow-stack">
              <div className="h-arrow right" />
              <div className="h-arrow left" />
            </div>
          </div>
        </div>

        <div className="details-grid three-col">
          <motion.div
            ref={card1Ref}
            className="col"
            style={{ 
              y: card1Y, 
              x: card1X, 
              opacity: card1Opacity, 
              scale: card1Scale 
            }}
          >
            <div className="kicker">FIRST 30 DAYS: ABSORB</div>
            <p className="copy">
              Head down. Learn the product, the team, the motion. Sit in on every product call. Learn the product the way a user would, then the way a competitor would.
            </p>
          </motion.div>

          <motion.div
            ref={card2Ref}
            className="col"
            style={{ 
              y: card2Y, 
              opacity: card2Opacity, 
              scale: card2Scale 
            }}
          >
            <div className="kicker">THE SECOND MONTH: SHARPEN</div>
            <p className="copy">
              Enough context now to start contributing. Build internal competitive intelligence that product, sales, and marketing can all pull from. Audit the website. Ship one blog.
            </p>
          </motion.div>

          <motion.div
            ref={card3Ref}
            className="col"
            style={{ 
              y: card3Y, 
              x: card3X, 
              opacity: card3Opacity, 
              scale: card3Scale 
            }}
          >
            <div className="kicker">3RD MONTH ONWARDS: COMPOUND</div>
            <p className="copy">
              Ready to pick up bigger pieces. Take ownership of what the team needs most: changelogs, sales decks, pitch decks, product narratives. Propose the next quarter roadmap for product marketing.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIStartWith;
