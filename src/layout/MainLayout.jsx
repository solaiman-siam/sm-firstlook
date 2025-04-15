import { Outlet } from "react-router"
import Sidebar from "../components/Sidebar"
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

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
  return (
    <div className="flex font-manrope bg-[#151515]">
        <div className="w-[270px] h-screen fixed  border-dashed border-r border-[#222122] ">
            <Sidebar/>
        </div>
        <div className="flex-1 ml-[270px] bg-black">
        <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout