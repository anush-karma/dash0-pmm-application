import React from 'react';
import { motion } from 'framer-motion';
import { Code, Moon, Camera } from 'lucide-react';
import './ThreeCampaigns.css';

const ThreeCampaigns = () => {
  const campaigns = [
    {
      icon: <Code className="campaign-icon" />,
      title: "Commitment Issues",
      oneLiner: "A series where Dash0 engineers walk through a hard problem they recently solved, in their own voice.",
      pitch: "Engineers commit code for a living. Every one of them has a story about a commit they will never forget. The one that broke prod. The one that took three days to undo. The one that taught them something they will carry for ten years. Commitment Issues is that story, told the way engineers actually tell each other stories.",
      whyItWorks: "The audience is a high performing engineering team, and they respond to relatability before they respond to marketing. When Dash0 engineers talk openly about hard problems, other engineers recognise themselves in the conversation. That recognition is what builds the relationship.",
      format: "Conversational video or written interview. Lightly edited. Recurring cadence.",
      size: "large",
    },
    {
      icon: <Moon className="campaign-icon" />,
      title: "Get Your Life Back",
      oneLiner: "A scroll based narrative page that lives a single 2 AM production incident through the five stages of grief.",
      pitch: "Anyone who has been on call knows the four hours between 2 AM and 6 AM do not pass like normal time. They pass like five different eras. Which maps almost too neatly onto the five stages of grief. Denial. Anger. Bargaining. Depression. Acceptance. The page tells that story. One incident, scroll by scroll, written specifically enough that any SRE reading it recognises their own night. Dash0 simplicity is the answer at the end.",
      launchWindow: "SysAdmin Appreciation Day is the natural fit. Halloween if the calendar lands there better.",
      status: "Brief, visual references, and copy already drafted. Ready to build.",
      size: "medium",
    },
    {
      icon: <Camera className="campaign-icon" />,
      title: "Customer Stories From Unexpected Industries",
      oneLiner: "Five Dash0 customers from industries where tech supports the product but is not the product. We tell their story first.",
      pitch: "Most case studies open with the vendor and squeeze the customer in around it. This series flips the camera. Pick five customers from worlds people do not expect to find observability in. Cannabis. Hospitality. Logistics. Manufacturing. Agriculture. Cover their world. Their product. Their culture. The texture of how they actually operate. Dash0 shows up the way it shows up in their day. Quietly. In the background. Doing its job.",
      whyItWorks: "Traditional case studies are interchangeable. This format is not. It humanises the relationship between Dash0 and its customers, and gives us content that travels because the story is interesting before anyone says the word observability.",
      format: "Long form written plus photo essay. One per quarter. Visit in person where possible.",
      size: "medium",
    },
  ];

  return (
    <section className="three-campaigns">
      <div className="campaigns-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="campaigns-header"
        >
          Three campaigns I'd love to pitch in week one
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="campaigns-intro"
        >
          Each one has a format, a launch window, and a reason to exist.
        </motion.p>

        <div className="campaigns-grid">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.title}
              className={`campaign-card campaign-${campaign.size}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="campaign-header">
                {campaign.icon}
                <h3 className="campaign-title">{campaign.title}</h3>
              </div>

              <p className="campaign-oneliner">{campaign.oneLiner}</p>

              <div className="campaign-section">
                <h4 className="campaign-section-title">The Pitch</h4>
                <p className="campaign-text">{campaign.pitch}</p>
              </div>

              {campaign.whyItWorks && (
                <div className="campaign-section">
                  <h4 className="campaign-section-title">Why It Works</h4>
                  <p className="campaign-text">{campaign.whyItWorks}</p>
                </div>
              )}

              {campaign.launchWindow && (
                <div className="campaign-section">
                  <h4 className="campaign-section-title">Launch Window</h4>
                  <p className="campaign-text">{campaign.launchWindow}</p>
                </div>
              )}

              {campaign.status && (
                <div className="campaign-status">
                  <span className="status-badge">{campaign.status}</span>
                </div>
              )}

              <div className="campaign-format">
                <span className="format-label">Format:</span> {campaign.format}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeCampaigns;
