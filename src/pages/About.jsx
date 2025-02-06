import { motion } from 'framer-motion';
import { FaCode, FaShieldAlt, FaServer, FaTools, FaGraduationCap, FaSchool, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  const education = [
    { icon: <FaGraduationCap />, title: 'College', description: 'B.P. Poddar Institute of Management and Technology (BCA, 2024 - 2028)' },
    { icon: <FaSchool />, title: 'High School', description: 'Uttarpara Govt. High School (Completed in 2024)' },
  ];

  const techSkills = [
    { icon: <FaCode />, title: 'Programming', description: 'C, Python, JavaScript, Node.js' },
    { icon: <FaShieldAlt />, title: 'Cybersecurity', description: 'Bug Bounty, CTFs, Ethical Hacking' },
    { icon: <FaServer />, title: 'Backend Development', description: 'Express.js, Flask, Firebase' },
    { icon: <FaLaptopCode />, title: 'Frontend Development', description: 'React, Tailwind CSS, HTML, CSS' },
    { icon: <FaTools />, title: 'DevOps & Tools', description: 'Linux, Docker, Git, CI/CD Pipelines' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">About Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Hi, I'm <span className="font-bold text-primary-400">Surajit Sen</span>, a dedicated student from Kolkata, India.  
          <br />
          My interests lie in <span className="font-bold">web development</span> and <span className="font-bold">cybersecurity</span>.  
          I'm passionate about building secure and efficient digital solutions that make a difference.  
          <br /><br />
          Alongside my studies, I’m continually learning new technologies and improving my skills to stay ahead in this fast-evolving field.  
          I’m excited about taking on challenges that help me grow and contribute meaningfully to the tech community.  
          <br /><br />
        </p>
      </motion.div>

      {/* Education Section */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-primary-500 transition-colors duration-300"
          >
            <div className="text-4xl text-primary-400 mb-4">{edu.icon}</div>
            <h3 className="text-xl font-heading font-semibold mb-3">{edu.title}</h3>
            <p className="text-gray-400">{edu.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Tech Skills & Tools Section */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {techSkills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-primary-500 transition-colors duration-300"
          >
            <div className="text-4xl text-primary-400 mb-4">{skill.icon}</div>
            <h3 className="text-xl font-heading font-semibold mb-3">{skill.title}</h3>
            <p className="text-gray-400">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default About;
