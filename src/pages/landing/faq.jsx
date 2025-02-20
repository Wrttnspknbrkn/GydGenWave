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
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common questions about using GydGenWave CRM</p>

        <motion.div 
          className="faqs__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="faqs__item">
            <h6>What is GydGenWave CRM?</h6>
            <p>GydGenWave CRM is a powerful customer relationship management system designed to help businesses manage customer interactions, automate workflows, and improve sales and support processes.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="faqs__item">
            <h6>How do I get started?</h6>
            <p>Getting started with GydGenWave CRM is easy. Simply sign up, set up your customer database, and begin managing relationships through our intuitive dashboard.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="faqs__item">
            <h6>Can GydGenWave CRM be customized for my business?</h6>
            <p>Yes! GydGenWave CRM is highly flexible, allowing you to customize features such as contact management, sales pipelines, and workflow automation to fit your unique business needs.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="faqs__item">
            <h6>Is customer support available?</h6>
            <p>Definitely! Our support team is available to assist you with setup, feature customization, and troubleshooting to ensure you get the most out of GydGenWave CRM.</p>
          </motion.div>
        </motion.div>

        <p>If you could not find an answer to your question, feel free to reach out to us via email:</p>
        <a 
          href="mailto:support@gydgen.com" 
          className="contact-button"
        >
          hello@gydgenwave.co
        </a>
      </div>

      {/* Updated Ready to Ride section */}
      <motion.section 
        className="ready-to-ride"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="ready-to-ride__content">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Ready to Ride the Wave of Business Efficiency?
          </motion.h2>
          <motion.button 
            className="ready-to-ride__button"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get 30days Free trial
          </motion.button>
        </div>
        <motion.div 
          className="socials"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <img src="/assets/images/social-icons.png" alt="Social Media Icons" />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Faq;