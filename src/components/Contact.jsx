import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="bg-[#FCFAF7] py-32">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[8px] text-[#8A7C67]">
            CONTACT
          </p>

          <h2 className="text-6xl font-semibold text-[#556B5D] mt-5">
            تواصل معنا
          </h2>

          <p className="text-[#6D655D] mt-8 max-w-2xl mx-auto leading-9 text-lg">
            يسعدنا استقبال استفساراتكم واقتراحاتكم، ونتطلع لخدمتكم في أي وقت
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* معلومات التواصل */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {[
              {
                icon: <Phone size={26} />,
                title: "الهاتف",
                value: "0500000000",
              },
              {
                icon: <Mail size={26} />,
                title: "البريد الإلكتروني",
                value: "hello@ward.sa",
              },
              {
                icon: <MapPin size={26} />,
                title: "الموقع",
                value: "الرياض، المملكة العربية السعودية",
              },
              {
                icon: <Clock size={26} />,
                title: "ساعات العمل",
                value: "7:00 صباحًا - 11:00 مساءً",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition duration-500"
              >
                <div className="bg-[#556B5D] text-white w-14 h-14 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#2E2A27]">
                    {item.title}
                  </h3>

                  <p className="text-[#6D655D] mt-1">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

          </motion.div>

          {/* النموذج */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] shadow-2xl p-10"
          >

            <div className="space-y-6">

              <input
                type="text"
                placeholder="الاسم"
                className="w-full rounded-2xl border border-[#E5DED5] px-5 py-4 focus:outline-none focus:border-[#556B5D] transition"
              />

              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full rounded-2xl border border-[#E5DED5] px-5 py-4 focus:outline-none focus:border-[#556B5D] transition"
              />

              <textarea
                rows="6"
                placeholder="...رسالتك"
                className="w-full rounded-2xl border border-[#E5DED5] px-5 py-4 resize-none focus:outline-none focus:border-[#556B5D] transition"
              />

              <button
                type="submit"
                className="w-full bg-[#556B5D] text-white py-4 rounded-full text-lg hover:bg-[#435449] transition duration-300"
              >
                إرسال الرسالة
              </button>

            </div>

          </motion.form>

        </div>

      </div>

    </section>
  );
}

export default Contact;

