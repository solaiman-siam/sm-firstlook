import { ArrowUpRight } from "lucide-react";
import Container from "../Container";
import { Link } from "react-router";
import { imageProvider } from "@/lib/imageProvider";

function Part6() {
  return (
    <div className=" border-dashed border-white/13 ">
      <Container>
        <div className="text-white  p-10 py-20 border-r border-l border-dashed border-white/13">
          <div className="flex justify-center items-center pb-8 gap-4">
            <span className="w-10 h-[1px]  bg-gradient-to-r from-transparent to-white"></span>
            <h3 className=" text-left text-text01 font-medium">My Stack</h3>
            <span className="w-10 h-[1px] bg-gradient-to-r from-white to-transparent"></span>
          </div>

          <div className="  gap-2 flex-wrap justify-center space-y-6 grid grid-cols-3 p-8 w-full rounded-sm">
            <Link to={'https://motion.dev/'} className=" group cursor-pointer flex items-center gap-3  rounded-sm text-text01 font-medium text-sm ">
              <div
                className="border
             border-white/40 group-hover:border-white transition-all duration-300  p-1.5  rounded-sm border-dashed"
              >
                <img
                  src="https://framerusercontent.com/images/kM0Y1rh5o9yHkMfrm3vU93RiOEk.svg"
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-white font-medium text-base flex items-center gap-1">Framer <ArrowUpRight className="transition-all text-text01 group-hover:text-white duration-300" size={18} strokeWidth={1} /></h4>
                <p className="text-sm text-text01/80 font-light font-sans">
                  Animation
                </p>
              </div>
            </Link>
            <Link to={'https://www.w3schools.com/js/'} className=" group cursor-pointer flex items-center gap-3  rounded-sm text-text01 font-medium text-sm ">
              <div
                className="border
             border-white/40 group-hover:border-white transition-all duration-300  p-1  rounded-sm border-dashed"
              >
                <img
                  className="w-10 h-10"
                  src={imageProvider.JavascriptImage}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-white font-medium text-base flex items-center gap-2">Javascript <ArrowUpRight className="transition-all text-text01 group-hover:text-white duration-300" size={18} strokeWidth={1} /></h4>
                <p className="text-sm text-text01/80 font-light font-sans">
                  Language
                </p>
              </div>
            </Link>
            <Link to={'https://redux-toolkit.js.org/'} className=" group cursor-pointer flex items-center gap-3  rounded-sm text-text01 font-medium text-sm ">
              <div
                className="border
             border-white/40 group-hover:border-white transition-all duration-300  p-2  rounded-sm border-dashed"
              >
                <img
                  className="w-8 h-8"
                  src={imageProvider.ReduxImage}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-white font-medium text-base flex items-center gap-2">Redux <ArrowUpRight className="transition-all text-text01 group-hover:text-white duration-300" size={18} strokeWidth={1} /></h4>
                <p className="text-sm text-text01/80 font-light font-sans">
                  State Management
                </p>
              </div>
            </Link>
            <Link to={'https://www.w3schools.com/Html/'} className=" group cursor-pointer flex items-center gap-3  rounded-sm text-text01 font-medium text-sm ">
              <div
                className="border
             border-white/40 group-hover:border-white transition-all duration-300  p-1.5  rounded-sm border-dashed"
              >
                <img
                  className="size-[38px]"
                  src={imageProvider.HtmlImage}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-white font-medium text-base flex items-center gap-2">HTML <ArrowUpRight className="transition-all text-text01 group-hover:text-white duration-300" size={18} strokeWidth={1} /></h4>
                <p className="text-sm text-text01/80 font-light font-sans">
                  Markup
                </p>
              </div>
            </Link>
            <Link to={'https://react.dev/'} className=" group cursor-pointer flex items-center gap-3  rounded-sm text-text01 font-medium text-sm ">
              <div
                className="border
             border-white/40 group-hover:border-white transition-all duration-300  p-1.5  rounded-sm border-dashed"
              >
                <img
                  className="size-[38px]"
                  src={imageProvider.ReactImage}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-white font-medium text-base flex items-center gap-2">React <ArrowUpRight className="transition-all text-text01 group-hover:text-white duration-300" size={18} strokeWidth={1} /></h4>
                <p className="text-sm text-text01/80 font-light font-sans">
                  Web Design
                </p>
              </div>
            </Link>
            <Link to={'https://www.w3schools.com/css/'} className=" group cursor-pointer flex items-center gap-3  rounded-sm text-text01 font-medium text-sm ">
              <div
                className="border
             border-white/40 group-hover:border-white transition-all duration-300  p-1.5  rounded-sm border-dashed"
              >
                <img
                  className="size-[38px]"
                  src={imageProvider.CssImage}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-white font-medium text-base flex items-center gap-2">CSS <ArrowUpRight className="transition-all text-text01 group-hover:text-white duration-300" size={18} strokeWidth={1} /></h4>
                <p className="text-sm text-text01/80 font-light font-sans">
                  Styling
                </p>
              </div>
            </Link>
            <Link to={'https://tailwindcss.com/'} className=" group cursor-pointer flex items-center gap-3  rounded-sm text-text01 font-medium text-sm ">
              <div
                className="border
             border-white/40 group-hover:border-white transition-all duration-300  p-1.5  rounded-sm border-dashed"
              >
                <img
                  className="size-[38px]"
                  src={imageProvider.TailwindImage}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-white font-medium text-base flex items-center gap-2">Tailwind <ArrowUpRight className="transition-all text-text01 group-hover:text-white duration-300" size={18} strokeWidth={1} /></h4>
                <p className="text-sm text-text01/80 font-light font-sans">
                  Styling
                </p>
              </div>
            </Link>
            <Link to={'https://www.typescriptlang.org/'} className=" group cursor-pointer flex items-center gap-3  rounded-sm text-text01 font-medium text-sm ">
              <div
                className="border
             border-white/40 group-hover:border-white transition-all duration-300  p-2  rounded-sm border-dashed"
              >
                <img
                  className="size-[36px]"
                  src={imageProvider.TypescriptImage}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-white font-medium text-base flex items-center gap-2">Typescript <ArrowUpRight className="transition-all text-text01 group-hover:text-white duration-300" size={18} strokeWidth={1} /></h4>
                <p className="text-sm text-text01/80 font-light font-sans">
                  Type Safe
                </p>
              </div>
            </Link>
            <Link to={'https://git-scm.com/'} className=" group cursor-pointer flex items-start gap-3  rounded-sm text-text01 font-medium text-sm ">
              <div
                className="border
             border-white/40 group-hover:border-white transition-all duration-300  p-1.5  rounded-sm border-dashed"
              >
                <img
                  className="size-[37px]"
                  src={imageProvider.GitImage}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-white font-medium text-base flex items-center gap-2">Git <ArrowUpRight className="transition-all text-text01 group-hover:text-white duration-300" size={18} strokeWidth={1} /></h4>
                <p className="text-sm text-text01/80 font-light font-sans">
                  Version Control
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Part6;
