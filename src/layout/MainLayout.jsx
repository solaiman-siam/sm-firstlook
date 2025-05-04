import { Outlet, ScrollRestoration, useLocation } from "react-router";
import Sidebar from "../components/Sidebar";
import { useContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Loader from "@/components/Loader";
import { motion } from "framer-motion";

import { AlignLeft, PanelLeftClose, PanelRightClose } from "lucide-react";
import { MainContext } from "@/provider/context";

function MainLayout() {
  const { isToggle, setIsToggle } = useContext(MainContext);
  const location = useLocation().pathname;

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., fetching data or assets)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // 1.5s delay

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loader />;
  }

  console.log(isToggle);

  return (
    <div className="flex font-manrope   bg-[#151515]">
      <span
        onClick={() => setIsToggle(!isToggle)}
        className="text-white/50 fixed  z-[1000] top-4 left-5"
      >
        <PanelRightClose size={24} />
      </span>

      <ScrollRestoration />
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1, position: "fixed" }}
        transition={{ duration: 1, ease: "easeIn" }}
        className={`w-[270px] h-screen fixed  z-[1000]  flex transition-all duration-300  border-dashed border-r border-[#222122] ${
          isToggle ? "-translate-x-100 " : "translate-x-0 bg-background01"
        }`}
      >
        <Sidebar />
        <span
          onClick={() => setIsToggle(!isToggle)}
          className="absolute top-4 right-2 text-white/50"
        >
          <PanelLeftClose />
        </span>
      </motion.div>
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="flex-1  lg:ml-[270px] relative"
      >
        <Outlet />
        {location === "/" && (
          <div className="bg-gradient-to-b lg:flex hidden from-transparent via-white/5 to-white/10  backdrop-blur-sm z-[88] sticky bottom-0 w-full h-[50px]"></div>
        )}
      </motion.div>
    </div>
  );
}

export default MainLayout;
