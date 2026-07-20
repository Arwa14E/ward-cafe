import { Phone, MapPin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#556B5D] text-white pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Logo */}
        <div>
          <h2 className="text-5xl font-semibold tracking-wide mb-6 hover:tracking-widest transition-all duration-500 cursor-default">
            ورد
          </h2>

          <p className="text-white/80 leading-8">
            قهوة مختصة، مخبوزات طازجة،
            وأجواء هادئة تمنحك لحظة تستحقها.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            روابط سريعة
          </h3>

          <ul className="space-y-4 text-white/80">

            <li>
              <a
                href="#hero"
                className="transition-all duration-300 hover:text-white hover:pr-2"
              >
                الرئيسية
              </a>
            </li>

            <li>
              <a
                href="#story"
                className="transition-all duration-300 hover:text-white hover:pr-2"
              >
                من نحن
              </a>
            </li>

            <li>
              <a
                href="#menu"
                className="transition-all duration-300 hover:text-white hover:pr-2"
              >
                القائمة
              </a>
            </li>

            <li>
              <a
                href="#gallery"
                className="transition-all duration-300 hover:text-white hover:pr-2"
              >
                المعرض
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="transition-all duration-300 hover:text-white hover:pr-2"
              >
                تواصل معنا
              </a>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            تواصل معنا
          </h3>

          <div className="space-y-5 text-white/80">

            <div className="flex items-center gap-3 hover:text-white transition-all duration-300">
              <Phone size={18} />
              <span>0500000000</span>
            </div>

            <div className="flex items-center gap-3 hover:text-white transition-all duration-300">
              <Mail size={18} />
              <span>hello@ward.sa</span>
            </div>

            <div className="flex items-center gap-3 hover:text-white transition-all duration-300">
              <MapPin size={18} />
              <span>الرياض، السعودية</span>
            </div>

          </div>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            ساعات العمل
          </h3>

          <p className="text-white/80">
            يوميًا
          </p>

          <p className="text-white font-medium mt-3">
            7:00 صباحًا - 11:00 مساءً
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-20 pt-8 text-center">

        <p className="text-white/60 text-sm tracking-wide">
          © {new Date().getFullYear()} ورد — جميع الحقوق محفوظة
        </p>

        <p className="mt-3 text-white/40 text-xs">
          شكراً لزيارتكم، نتطلع لرؤيتكم قريبًا ☕
        </p>

      </div>
    </footer>
  );
}

export default Footer;