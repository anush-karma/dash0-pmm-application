import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Moon, Camera } from 'lucide-react';
import './ThreeCampaignsNew.css';

const ThreeCampaignsNew = () => {
  const sectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  // Card 1 scroll transforms - flies in from left, rotates
  const { scrollYProgress: card1Progress } = useScroll({
    target: card1Ref,
    offset: ['start end', 'center center']
  });
  const card1Y = useTransform(card1Progress, [0, 1], [100, 0]);
  const card1X = useTransform(card1Progress, [0, 1], [-80, 0]);
  const card1Rotate = useTransform(card1Progress, [0, 0.5, 1], [-8, 0, 0]);
  const card1Opacity = useTransform(card1Progress, [0, 0.2, 1], [0, 1, 1]);
  const card1Scale = useTransform(card1Progress, [0, 0.6, 1], [0.8, 1.05, 1]);

  // Card 2 scroll transforms - flies in from bottom with bounce
  const { scrollYProgress: card2Progress } = useScroll({
    target: card2Ref,
    offset: ['start end', 'center center']
  });
  const card2Y = useTransform(card2Progress, [0, 1], [120, 0]);
  const card2Opacity = useTransform(card2Progress, [0, 0.2, 1], [0, 1, 1]);
  const card2Scale = useTransform(card2Progress, [0, 0.6, 1], [0.8, 1.08, 1]);

  // Card 3 scroll transforms - flies in from right, rotates
  const { scrollYProgress: card3Progress } = useScroll({
    target: card3Ref,
    offset: ['start end', 'center center']
  });
  const card3Y = useTransform(card3Progress, [0, 1], [100, 0]);
  const card3X = useTransform(card3Progress, [0, 1], [80, 0]);
  const card3Rotate = useTransform(card3Progress, [0, 0.5, 1], [8, 0, 0]);
  const card3Opacity = useTransform(card3Progress, [0, 0.2, 1], [0, 1, 1]);
  const card3Scale = useTransform(card3Progress, [0, 0.6, 1], [0.8, 1.05, 1]);

  const campaigns = [
    {
      icon: <Code className="camp-icon-grid" />,
      title: 'COMMITMENT ISSUES',
      desc: 'Dash0 engineers walk through hard problems they recently solved, in their own voice.',
      why: 'Engineers respond to relatability before marketing. When Dash0 engineers talk openly about hard problems, other engineers recognize themselves.',
      format: 'Video or written interview. Recurring.',
      ref: card1Ref,
      style: { y: card1Y, x: card1X, rotate: card1Rotate, opacity: card1Opacity, scale: card1Scale }
    },
    {
      icon: <Moon className="camp-icon-grid" />,
      title: 'GET YOUR LIFE BACK',
      desc: 'A scroll-based narrative page that lives a single 2 AM production incident through the five stages of grief.',
      why: 'Every SRE recognizes their own night. Dash0 simplicity is the answer at the end.',
      format: 'Interactive scroll experience',
      ref: card2Ref,
      style: { y: card2Y, opacity: card2Opacity, scale: card2Scale }
    },
    {
      icon: <Camera className="camp-icon-grid" />,
      title: 'UNEXPECTED INDUSTRIES',
      desc: 'Five Dash0 customers from industries where tech supports the product but is not the product. We tell their story first.',
      why: 'Traditional case studies are interchangeable. This format is not.',
      format: 'Long form + photo essay',
      ref: card3Ref,
      style: { y: card3Y, x: card3X, rotate: card3Rotate, opacity: card3Opacity, scale: card3Scale }
    },
  ];

  return (
    <section ref={sectionRef} className="campaigns-grid-layout">
      <div className="campaigns-wrap-grid">
        <div className="campaigns-grid-2x2">
          {/* Title card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="title-card-grid"
          >
            <h2>
              3 CAMPAIGN<br />
              IDEAS TO <span className="title-red-grid">LIFT</span><br />
              BRAND
            </h2>
          </motion.div>

          {/* Campaign cards with continuous scroll */}
          {campaigns.map((campaign) => (
            <motion.div
              key={campaign.title}
              ref={campaign.ref}
              className="campaign-card-grid"
              style={campaign.style}
            >
              <div className="card-header-grid">
                {campaign.icon}
                <h3>{campaign.title}</h3>
              </div>

              <p className="card-desc-grid">{campaign.desc}</p>

              <div className="card-section-grid">
                <h4>WHY IT WORKS</h4>
                <p>{campaign.why}</p>
              </div>

              <div className="card-format-grid">
                <span>Format:</span> {campaign.format}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeCampaignsNew;
