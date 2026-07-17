import { motion } from "framer-motion";
import menuImage from "../assets/menu.png";

const menuItems = [
  {
    name: "اسبريسو",
    description: "قهوة سوداء مركزة بنكهة غنية",
    price: "14 SR",
  },
  {
    name: "لاتيه",
    description: "إسبريسو مع حليب مبخر ورغوة ناعمة",
    price: "18 SR",
  },
  {
    name: "فلات وايت",
    description: "قوام كريمي ونكهة متوازنة",
    price: "19 SR",
  },
  {
    name: "سبانش لاتيه",
    description: "حليب محلى مع إسبريسو فاخر",
    price: "21 SR",
  },
  {
    name: "V60",
    description: "استخلاص يدوي يبرز نكهات البن",
    price: "22 SR",
  },
];

function Menu() {
  return (
    <section id="menu" className="bg-[#FCFAF7] py-32">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* الصورة */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <img
            src={menuImage}
            alt="قائمة ورد"
            className="w-full h-[650px] object-cover rounded-[40px] shadow-2xl hover:scale-[1.03] transition duration-700"
          />

        </motion.div>

        {/* القائمة */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[8px] text-[#8A7C67]">
            MENU
          </p>

          <h2 className="text-6xl font-semibold text-[#556B5D] mt-5">
            قائمتنا
          </h2>

          <p className="mt-8 text-[#6D655D] leading-9 text-lg max-w-xl">
            نختار أجود أنواع البن، ونحضّر كل كوب بعناية
            ليمنحك تجربة هادئة بطعم لا يُنسى
          </p>

          <div className="mt-12 space-y-5">

            {menuItems.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-500"
              >

                <div className="flex justify-between items-center">

                  <h3 className="text-2xl font-semibold text-[#2E2A27]">
                    {item.name}
                  </h3>

                  <span className="text-[#556B5D] text-xl font-bold">
                    {item.price}
                  </span>

                </div>

                <p className="mt-3 text-[#6D655D] leading-8">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

          <a
            href="#contact"
            className="inline-block mt-12 bg-[#556B5D] text-white px-10 py-4 rounded-full hover:bg-[#465A4D] transition shadow-lg hover:shadow-xl"
          >
            اطلب الآن
          </a>

        </motion.div>

      </div>

    </section>
  );
}

export default Menu;