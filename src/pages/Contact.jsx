import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const recaptchaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const recaptchaValue = recaptchaRef.current.getValue(); 

    if (!recaptchaValue) {
      alert('Please complete the reCAPTCHA!');
      return;
    }

    // Form data is automatically handled by Formspree
    alert('Form submitted successfully!');
    window.location.reload(); // Refresh the page after submission
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        onSubmit={handleSubmit} 
        action="https://formspree.io/f/xzzdvdqg" 
        method="POST" 
        className="space-y-6 bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 max-w-2xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Your message here..."
          ></textarea>
        </div>

        {/* Add reCAPTCHA */}
        <div className="mt-4">
          <ReCAPTCHA
            sitekey="6LcM3DIqAAAAAGjqO8hjg35wFqEiWRnLVBin78Pl"
            ref={recaptchaRef}
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300 font-medium"
        >
          Send Message
        </button>
      </motion.form>

      {/* Add a note or email below the form */}
      <div className="mt-6 text-center text-gray-400">
        <p>Or email me at <a href="mailto:getsensurajit@gmail.com" className="text-primary-500">getsensurajit@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Contact;
