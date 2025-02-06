import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import useTypewriter from '../hooks/useTypewriter';

const Home = () => {
  const typewriterText = useTypewriter([
    "A Backend Developer",
    "A Bug Bounty Hunter",
    "A Security Researcher",
    "A CTF Player",
    "A Learner",
  ], 100, 50, 2000);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-12"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <img 
          src="https://res.cloudinary.com/dgxxrnmkt/image/upload/v1738838127/WhatsApp_Image_2025-01-28_at_13.01.54_46a15996_qmvpnf.jpg" 
          alt="Surajit" 
          className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg" 
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
            Hi, I'm Surajit
          </span>
        </h1>
        <div className="h-20"> {/* Fixed height container for typewriter text */}
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-400 mb-8">
            {typewriterText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="/contact"
            className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300 font-medium"
          >
            Get in Touch
          </a>
          <a
            href="projects"
            className="px-8 py-3 border border-primary-500 text-primary-400 hover:bg-primary-500/10 rounded-lg transition-colors duration-300 font-medium"
          >
            View Projects
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
