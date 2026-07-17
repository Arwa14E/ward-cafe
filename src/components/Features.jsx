import { Coffee, Wheat, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Leaf size={34} />,
    title: "لحظات هادئة",
    description: "مساحات مريحة تمنحك الهدوء للعمل أو الاسترخاء",
  },
  {
    icon: <Coffee size={34} />,
    title: "قهوة مختصة",
    description: "محضّرة بحبوب مختارة بعناية وبأيدي باريستا محترفين",
  },
  {
    icon: <Wheat size={34} />,
    title: "مخبوزات طازجة",
    description: "تُحضّر يوميًا لترافق قهوتك بأفضل مذاق",
  },
];

function Features() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="bg-[#FCFAF7] rounded-[30px] p-10 text-center shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2"
            >

              <div className="w-16 h-16 rounded-full bg-[#556B5D] text-white flex items-center justify-center mx-auto">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-[#2E2A27]">
                {feature.title}
              </h3>

              <p className="mt-4 text-[#6D655D] leading-8">
                {feature.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;