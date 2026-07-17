import { motion } from "framer-motion";
import story from "../assets/story.png";

function Story() {
  return (
    <section id="story" className="bg-white py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <img
              src={story}
              alt="ورد"
              className="rounded-[40px] shadow-2xl w-full h-[680px] object-cover"
            />

            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-xl rounded-3xl px-8 py-6 shadow-xl">

              <p className="text-4xl font-semibold text-[#556B5D]">
                2026
              </p>

              <p className="text-[#6D655D] mt-2">
                بداية الحكاية
              </p>

            </div>

          </motion.div>

          {/* Text */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[8px] text-[#8A7C67]">
              OUR STORY
            </p>

            <h2 className="text-6xl font-semibold text-[#556B5D] mt-6">
              قصتنا
            </h2>

            <p className="mt-8 text-[#6D655D] text-xl leading-10">
              في <span className="text-[#556B5D] font-semibold">ورد</span>،
              نؤمن أن القهوة ليست مجرد مشروب، بل لحظة هادئة
              تمنحك فرصة للتوقف والاستمتاع بكل رشفة
            </p>

            <p className="mt-6 text-[#6D655D] text-xl leading-10">
              اخترنا أجود أنواع البن، وصممنا المكان ليكون
              مساحة مريحة تجمع بين الجودة، البساطة،
              والدفء في كل زيارة 
            </p>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-6 mt-14">

              <div className="bg-[#F7F5F2] rounded-3xl p-6 text-center shadow-sm">

                <h3 className="text-4xl font-bold text-[#556B5D]">
                  +20
                </h3>

                <p className="mt-2 text-[#6D655D]">
                  نوعًا من القهوة
                </p>

              </div>

              <div className="bg-[#F7F5F2] rounded-3xl p-6 text-center shadow-sm">

                <h3 className="text-4xl font-bold text-[#556B5D]">
                  +40
                </h3>

                <p className="mt-2 text-[#6D655D]">
                  مخبوزات طازجة
                </p>

              </div>

              <div className="bg-[#F7F5F2] rounded-3xl p-6 text-center shadow-sm">

                <h3 className="text-4xl font-bold text-[#556B5D]">
                  100%
                </h3>

                <p className="mt-2 text-[#6D655D]">
                  قهوة مختصة
                </p>

              </div>

              <div className="bg-[#F7F5F2] rounded-3xl p-6 text-center shadow-sm">

                <h3 className="text-4xl font-bold text-[#556B5D]">
                  يوميًا
                </h3>

                <p className="mt-2 text-[#6D655D]">
                  تحضير طازج
                </p>

              </div>

            </div>

            <a
              href="#menu"
              className="inline-block mt-12 bg-[#556B5D] text-white px-10 py-4 rounded-full hover:bg-[#465A4D] transition shadow-lg hover:shadow-xl"
            >
              اكتشف قائمتنا
            </a>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Story;