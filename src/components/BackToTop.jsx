import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
      fixed
      bottom-8
      left-8
      w-14
      h-14
      rounded-full
      bg-[#556B5D]
      text-white
      shadow-xl
      hover:bg-[#44564A]
      hover:scale-110
      transition-all
      duration-300
      z-50
      "
    >
      <ChevronUp className="mx-auto" />
    </button>
  );
}

export default BackToTop;