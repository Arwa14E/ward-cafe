import hero from "../assets/hero.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="hero" className="bg-[#F7F5F2]">

      {/* Hero Image */}

      <div className="relative w-full h-screen overflow-hidden">

        <motion.img
          src={hero}
          alt="ورد"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20"></div>

      </div>

      {/* Hero Content */}

      <div className="max-w-5xl mx-auto text-center px-6 py-24">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#8A7C67] text-4xl"
        >
          ✿
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-semibold text-[#556B5D] mt-2"
        >
          ورد
        </motion.h2>

        <div className="w-12 h-[2px] bg-[#C9BEAE] mx-auto my-6"></div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: .2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-semibold text-[#2E2A27] leading-tight"
        >
          قهوة تُشبه الهدوء
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: .4 }}
          viewport={{ once: true }}
          className="mt-8 text-xl leading-10 text-[#6D655D] max-w-2xl mx-auto"
        >
          استمتع بقهوة مختصة في مساحة صُممت بعناية،
          لتمنحك لحظة هادئة تستحقها
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: .6 }}
          viewport={{ once: true }}
          className="mt-12"
        >

          <a
            href="#menu"
            className="inline-block bg-[#556B5D] text-white px-10 py-4 rounded-full hover:bg-[#465A4D] transition shadow-lg hover:shadow-xl"
          >
            استكشف القائمة
          </a>

        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
          }}
          className="mt-16 text-[#556B5D] text-3xl"
        >
          ↓
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;