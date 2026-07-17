import { motion } from "framer-motion";

import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";

const images = [
  {
    image: gallery1,
    title: "الجلسات الهادئة",
    className: "md:row-span-2 h-[620px]",
  },
  {
    image: gallery2,
    title: "القهوة المختصة",
    className: "h-[300px]",
  },
  {
    image: gallery3,
    title: "المخبوزات",
    className: "h-[300px]",
  },
  {
    image: gallery4,
    title: "تفاصيل المكان",
    className: "md:col-span-2 h-[420px]",
  },
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#F7F5F2] py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[8px] text-[#8A7C67]">
            GALLERY
          </p>

          <h2 className="text-6xl font-semibold text-[#556B5D] mt-5">
            لحظات من ورد
          </h2>

          <p className="text-[#6D655D] mt-8 max-w-2xl mx-auto leading-9 text-lg">
            كل زاوية تحكي قصة، وكل فنجان يبدأ منها لحظة مختلفة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-[300px]">

          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-[35px] shadow-xl group ${item.className}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-white text-3xl font-semibold">
                  {item.title}
                </h3>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;