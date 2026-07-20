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
          transition={{
  duration: 1.8,
  ease: "easeOut",
}}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/35"></div>
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
          كل كوب يُحضّر بعناية，
ليمنحك لحظة هادئة تستحقها
        </motion.p>

        <motion.div
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: .7, delay: .6 }}
  viewport={{ once: true }}
  className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
>

  <a
    href="#menu"
    className="inline-flex items-center justify-center bg-[#556B5D] text-white px-10 py-4 rounded-full hover:bg-[#465A4D] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
  >
    استكشف القائمة
  </a>

  <a
    href="/Ward_Menu_A4.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center border-2 border-[#556B5D] text-[#556B5D] px-10 py-4 rounded-full hover:bg-[#556B5D] hover:text-white transition-all duration-300 hover:scale-105"
  >
     تحميل القائمة PDF
  </a>

</motion.div>

        <motion.a
  href="#features"
  animate={{ y: [0, 12, 0] }}
  transition={{
    duration: 1.6,
    repeat: Infinity,
  }}
  className="mt-16 block text-[#556B5D] text-3xl hover:text-[#435449] transition"
>
  ↓
</motion.a>



      </div>

    </section>
  );
}

export default Hero;