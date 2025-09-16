import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 1.05,
  },
};

export default function Home() {
  return (
    <>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-brand-primary text-3xl font-bold">Welcome!</h1>
          {/* Add your homepage content here */}
        </div>
      </motion.div>
    </>
  );
}