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

export default function Events() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
    >
      <>
        <div className="bg-zinc-900">
          <h1 className="text-brand-primary font-bold">Our Events</h1>
        </div>
      </>
    </motion.div>
  );
}
