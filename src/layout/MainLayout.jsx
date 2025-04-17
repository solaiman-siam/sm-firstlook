import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Loader from "@/components/Loader";
import { motion } from "framer-motion";

function MainLayout() {
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

  return (
    <div className="flex font-manrope  bg-[#151515]">
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1, position: "fixed" }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="w-[270px] h-screen fixed   border-dashed border-r border-[#222122] "
      >
        <Sidebar />
      </motion.div>
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="flex-1 ml-[270px] relative"
      >
        <Outlet />

        <div className="bg-gradient-to-b from-transparent via-white/5 to-white/10  backdrop-blur-sm z-[88] sticky bottom-0 w-full h-[50px]"></div>

      </motion.div>
    </div>
  );
}

export default MainLayout;
