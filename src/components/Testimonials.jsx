import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "سارة",
    avatar: "س",
    text: "من أجمل المقاهي التي زرتها. القهوة ممتازة والمكان يمنح شعورًا بالهدوء",
  },
  {
    name: "محمد",
    avatar: "م",
    text: "التصميم راقٍ جدًا والخدمة سريعة. أصبحت زيارتي الأسبوعية المفضلة",
  },
  {
    name: "ريم",
    avatar: "ر",
    text: "كل تفصيلة في المكان جميلة، من القهوة إلى المخبوزات وحتى الموسيقى",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#F7F5F2] py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[8px] text-[#8A7C67]">
            TESTIMONIALS
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold text-[#556B5D] mt-6">
            ماذا يقول عملاؤنا
          </h2>

          <p className="mt-8 text-[#6D655D] text-lg leading-9 max-w-2xl mx-auto">
            أكثر ما يسعدنا هو أن تصبح زيارتكم إلى ورد
            تجربة تتكرر بكل حب
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              className="bg-white rounded-[35px] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 flex flex-col justify-between"
            >

              <div>

                <div className="flex gap-1 text-[#D6A84F] mb-6">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="currentColor"
                    />
                  ))}

                </div>

                <p className="text-[#6D655D] leading-9">
                  "{review.text}"
                </p>

              </div>

              <div className="flex items-center gap-4 mt-8">

                <div className="w-14 h-14 rounded-full bg-[#556B5D] text-white flex items-center justify-center text-xl font-semibold">

                  {review.avatar}

                </div>

                <div>

                  <h3 className="text-xl font-semibold text-[#556B5D]">
                    {review.name}
                  </h3>

                  <p className="text-[#9B948C] text-sm">
                    عميل لدى ورد
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;