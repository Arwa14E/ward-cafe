import { motion } from "framer-motion";

import coffee from "../assets/coffee.png";
import bakery from "../assets/bakery.png";
import space from "../assets/space.png";

const sections = [
  {
    image: coffee,
    title: "قهوة مختصة",
    description:
      "حبوب مختارة بعناية، تُحمّص لتمنحك كوبًا غنيًا ومتوازنًا في كل مرة",
  },
  {
    image: bakery,
    title: "مخبوزات طازجة",
    description:
      "مخبوزات تُحضّر يوميًا لترافق قهوتك بنكهات دافئة ولحظات لا تُنسى",
  },
  {
    image: space,
    title: "جلسات هادئة",
    description:
      "مساحات هادئة وإضاءة طبيعية تمنحك الراحة والتركيز والاسترخاء",
  },
];

function Experience() {
  return (
    <section className="bg-[#F7F5F2] py-32">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[8px] text-[#8A7C67]">
            EXPERIENCE
          </p>

         <h2 className="text-5xl md:text-6xl font-semibold text-[#556B5D] mt-6">
           تفاصيل تصنع الهدوء
          </h2>

          <p className="mt-8 text-[#6D655D] text-xl leading-9 max-w-3xl mx-auto">
            مكان صُمم بعناية، حيث تلتقي القهوة المختصة
بالهدوء والتفاصيل التي تصنع تجربتك 
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {sections.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[35px] bg-white shadow-xl"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-semibold text-[#2E2A27]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-[#6D655D]">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;