import { useContext, useState } from "react";
import { navMenus } from "../lib/staticData";
import { MoveUpRight, PanelLeftClose } from "lucide-react";
import { PiDownloadSimple } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router";
import { MainContext } from "@/provider/context";

function Sidebar() {
  const [active, setActive] = useState(0);
  const {isToggle, setIsToggle} = useContext(MainContext)

  const today = new Date();

  const formattedDate = `${
    today.getMonth() + 1
  }/${today.getDate()}/${today.getFullYear()}`;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume_md_solaiman_siam.pdf"; // This path is relative to the public folder
    link.download = "Md_Solaiman_CV.pdf"; // Optional: name the file
    link.click();
  };

  return (
    <div className="h-screen flex relative flex-col justify-between  ">
     
      <div className="p-6">
        <div className="flex items-center gap-2 text-white">
          <div className="w-12 h-12 overflow-hidden rounded-lg ">
            <img
              className="w-full h-full object-cover"
              src="https://framerusercontent.com/images/Y7xGl21aQgHVU4UiWLBvVfD1dU.jpg?scale-down-to=512"
              alt=""
            />
          </div>
          <div className="flex flex-col  ">
            <p className="font-curve font-medium text-xl">Md Solaiman</p>
            <h4 className="font-manrope text-text01 text-sm font-medium">
              Web Developer{" "}
            </h4>
          </div>
        </div>

        <div className="flex flex-col text-sm font-medium pt-8">
          {navMenus.map((item, index) => (
            <Link
              key={item.id}
              to={item?.link}
              onClick={() =>{ !item.isSection && setActive(index) ; setIsToggle(!isToggle)}}
              className={`${
                index === active
                  ? `text-white border-white/5 border relative bg-[#1C1B1C]  py-[9px] transition-all group cursor-pointer duration-200 rounded-lg flex  items-center gap-2 ${
                      item.isSection ? "" : "px-2"
                    }`
                  : `text-text01 group relative transition-all duration-200 py-[9px] rounded-lg border ${
                      !item.isSection &&
                      "hover:text-white hover:border-white/5 hover:bg-[#1C1B1C]"
                    } border-transparent cursor-pointer flex items-center gap-2 ${
                      item.isSection ? "" : "px-2"
                    } `
              }`}
            >
              {" "}
              {index === navMenus.length - 1 ? (
                <>
                  {" "}
                  <MoveUpRight
                    size={18}
                    className="absolute top-1/2 right-4 -translate-y-1/2 group-hover:opacity-95 opacity-0 transition-all duration-200"
                  />{" "}
                  <FaGithub />
                </>
              ) : (
                <span
                  className={`${
                    item.isSection ? "" : "size-4 mb-2"
                  } group-hover:opacity-100 opacity-60`}
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
              )}{" "}
              <p className={`${item.isSection ? "py-4 text-[15px]" : ""}`}>
                {" "}
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t w-full flex flex-col border-dashed gap-4 border-[#222122]  p-6 ">
        <div className="text-white p-6 gap-1  border-dashed flex flex-col bg-background01 border border-white/10 rounded-lg ">
          <h3 className="text-xl font-medium font-mono text-text02">
            {formattedDate}
          </h3>
          <p className="text-text01 text-sm font-medium">Savar, Dhaka</p>
        </div>
        <div className="text-white w-full">
          <button
            onClick={handleDownload}
            className="flex hover:bg-white/15 transition-all duration-300 cursor-pointer border-dashed text-text02 justify-center items-center gap-2  w-full px-4 py-2.5 font-medium text-[15px] bg-background01 border border-white/10 rounded-lg"
          >
            <PiDownloadSimple size={22} />
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
