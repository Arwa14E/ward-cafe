import { useEffect, useState } from "react";
import {
  Menu,
  Search,
  X,
  House,
  Coffee,
  BookOpen,
  CalendarDays,
  Phone,
} from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem =
    "relative cursor-pointer transition-colors duration-300 hover:text-[#556B5D] after:absolute after:right-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#556B5D] after:transition-all after:duration-300 hover:after:w-full";

  const mobileItem =
    "flex items-center gap-4 py-5 text-xl text-[#2E2A27] border-b border-[#ECE6DD] transition-all duration-300 hover:text-[#556B5D] hover:pr-2";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div
          dir="rtl"
          className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6"
        >
          {/* Logo */}
          <div className="text-right cursor-pointer">
            <div className="w-12 h-[2px] bg-[#556B5D] mb-2 ml-auto"></div>

            <h1 className="text-4xl font-semibold tracking-wide text-[#556B5D]">
              ورد
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-14 text-[17px] font-medium text-[#2E2A27]">
            <li className={navItem}>
              <a href="#home">الرئيسية</a>
            </li>

            <li className={navItem}>
              <a href="#story">من نحن</a>
            </li>

            <li className={navItem}>
              <a href="#menu">القائمة</a>
            </li>

            <li className={navItem}>
              <a href="#gallery">الفعاليات</a>
            </li>

            <li className={navItem}>
              <a href="#contact">تواصل معنا</a>
            </li>
          </ul>

          {/* Left Icons */}
          <div className="flex items-center gap-5">
            <button className="hover:text-[#556B5D] transition duration-300">
              <Search size={23} />
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden hover:text-[#556B5D] transition duration-300"
            >
              <Menu size={27} />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-white z-50 shadow-2xl transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="bg-[#556B5D] text-white px-8 py-4">
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

  <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-2xl">
    ✿
  </div>

  <div>
    <h2 className="text-3xl font-semibold tracking-wide">
      ورد
    </h2>

    <p className="text-white/75 text-sm mt-1">
      قهوة مختصة • مخبوزات طازجة
    </p>
  </div>

</div>

            <button onClick={() => setMenuOpen(false)}>
              <X size={30} />
            </button>

          </div>
        </div>

        <div className="px-8 py-8">
        
                  <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className={mobileItem}
          >
            <House size={22} />
            <span>الرئيسية</span>
          </a>

          <a
            href="#story"
            onClick={() => setMenuOpen(false)}
            className={mobileItem}
          >
            <Coffee size={22} />
            <span>من نحن</span>
          </a>

          <a
            href="#menu"
            onClick={() => setMenuOpen(false)}
            className={mobileItem}
          >
            <BookOpen size={22} />
            <span>القائمة</span>
          </a>

          <a
            href="#gallery"
            onClick={() => setMenuOpen(false)}
            className={mobileItem}
          >
            <CalendarDays size={22} />
            <span>الفعاليات</span>
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className={mobileItem}
          >
            <Phone size={22} />
            <span>تواصل معنا</span>
          </a>

          <div className="mt-10 rounded-3xl bg-[#F7F5F2] p-6 text-center">
            <p className="text-[#556B5D] text-lg font-semibold">
              قهوة مختصة 
            </p>

            <p className="mt-2 text-[#6D655D] text-sm leading-7">
              استمتع بأفضل القهوة والمخبوزات
              في أجواء هادئة ومريحة.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;