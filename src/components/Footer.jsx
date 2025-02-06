import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-4 py-8 text-center">
        {/* Social Links */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
          <div className="flex justify-center space-x-4">
            {[
              { href: 'https://github.com', icon: <FaGithub /> },
              { href: 'https://linkedin.com', icon: <FaLinkedin /> },
              { href: 'https://twitter.com', icon: <FaTwitter /> },
            ].map(({ href, icon }, index) => (
              <motion.a
                key={index}
                whileHover={{ y: -3 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            Made with <FaHeart className="inline-block text-red-500 mx-1" /> by{' '}
            <span className="text-primary-400">Surajit</span> © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;