import React from 'react';
import { motion } from 'framer-motion';
import "./landing.scss";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Faq = () => {
  return (
    <div className="faq">
      <div className="how_it_work">
        <h2>How we work for your organization</h2>
        <p className="subtitle">
          Our CRM streamlines business with Customer Management for tracking interactions, 
          Lead Management for nurturing prospects, and a visual Sales Pipeline.
        </p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="features-container"
        >
          <motion.div variants={itemVariants} className="feature-item">
            <img src="/assets/images/chart-icon.svg" alt="Chart" className="feature-icon" />
            <h3>Choose your Plan</h3>
            <p>Select Your Plan: Boost your business with our CRM! Choose flexible pricing and start your free trial!</p>
          </motion.div>

          <motion.div variants={itemVariants} className="feature-item">
            <img src="/assets/images/graph-icon.svg" alt="Graph" className="feature-icon" />
            <h3>Tailor to your Business</h3>
            <p>Tailor your CRM with custom fields and workflows. Automate tasks and set alerts to enhance productivity.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="feature-item">
            <img src="/assets/images/dollar-icon.svg" alt="Dollar" className="feature-icon" />
            <h3>Launch & Grow</h3>
            <p>Elevate your business with our CRM! Streamline sales and enhance customer interactions.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="faqs">
        <h2>Frequently asked questions</h2>
        <p>Find answers to common questions about using GydGenWave</p>

        <motion.div 
          className="faqs__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="faqs__item">
            <h6>What is GydGenWave?</h6>
            <p>GydGenWave is a cutting-edge ERP system tailored for small businesses in Ghana. It offers an integrated platform to streamline operations, manage workflows, and improve productivity.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="faqs__item">
            <h6>How do I get started?</h6>
            <p>Getting started with GydGenWave is straightforward. Begin by selecting the modules that best suit your business needs—whether it's CRM for managing customer relationships or Inventory Management for tracking stock.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="faqs__item">
            <h6>Is GydGenWave customizable for my business needs?</h6>
            <p>Yes, GydGenWave is highly customizable to fit your unique requirements. Each module, from CRM to Accounting, can be tailored to match your operational processes and workflows.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="faqs__item">
            <h6>Is there customer support?</h6>
            <p>Absolutely! Our dedicated customer support team is here to help you at every stage. Whether you need assistance with setup, customization, or troubleshooting, you can count on us.</p>
          </motion.div>
        </motion.div>

        <p>If you couldn't find your favorite questions kindly send us a mail at</p>
        <button>hello@gydgenwave.co</button>
      </div>

      <section className="ready-to-ride">
        <div className="ready-to-ride__content">
          <h2>Ready to Ride the Wave of Business Efficiency?</h2>
        </div>
        <button className="ready-to-ride__button">Get 30days Free trial</button>
        <div className="socials">
          <img src="/assets/images/social-icons.png" alt="Social Media Icons" />
        </div>
      </section>
    </div>
  );
};

export default Faq;