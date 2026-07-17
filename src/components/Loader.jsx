import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 bg-[#F7F5F2] flex items-center justify-center z-[9999]">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1, 0.9, 1],
          opacity: 1,
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="text-center"
      >
        <h1 className="text-7xl text-[#556B5D] font-light">
          ورد
        </h1>

        <div className="w-20 h-[2px] bg-[#556B5D] mx-auto mt-5"></div>

      </motion.div>

    </div>
  );
}

export default Loader;