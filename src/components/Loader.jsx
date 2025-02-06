import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => prev + 1);
      } else {
        setLoading(false);
      }
    }, 20);

    return () => clearTimeout(timer);
  }, [progress, setLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50"
    >
      <FaSpinner className="animate-spin text-4xl text-indigo-500 mb-4" />
      <motion.div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-full bg-indigo-500"
        />
      </motion.div>
      <h2 className="mt-4 text-xl font-semibold text-gray-300">{progress}%</h2>
    </motion.div>
  );
}

export default Loader;