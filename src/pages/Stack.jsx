
import Container from '@/components/Container'
import { imageProvider } from '@/lib/imageProvider'
import {motion} from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

function Stack() {
  return (
    <motion.div
    initial={{ filter: "blur(10px)" }}
    animate={{ filter: "blur(0px)" }}
    transition={{ duration: 0.3, ease: "easeIn" }}
  >
    <Container>
      <div className="text-white min-h-screen  relative  p-10 pt-20 border-r border-l border-dashed border-white/13">
        <div className="pb-20">
          <h3 className="text-3xl font-medium pb-4">My toolbox</h3>
          <p className="text-text01 font-medium w-6/12">
          The tools and technologies that power my work, every step of the way.
          </p>
        </div>


        <div className="text-white    border-dashed border-white/13">
     
          <div className="  gap-4 flex-wrap justify-center  grid grid-cols-2  w-full rounded-sm">
            <Link to={'https://motion.dev/'} className=" bg-[#1A1A1A] hover:border hover:border-dashed border border-transparent hover:border-white/40 p-4  group cursor-pointer flex items-center gap-3  rounded-sm text-text01 font-medium text-sm">
              <div
                className="
             border-white/40 bg-black group-hover:border-white transition-all duration-300  p-1.5  rounded-sm border-dashed"
              >
                <img
                  src="https://framerusercontent.com/images/kM0Y1rh5o9yHkMfrm3vU93RiOEk.svg"
                  alt=""
                />
              </div>
              <div className='flex flex-col gap-0.5'>
                <h4 className="text-white font-medium text-base flex items-center gap-1">Framer <ArrowUpRight className="transition-all text-text01 group-hover:text-white duration-300" size={18} strokeWidth={1} /></h4>
                <p className="text-sm text-text01/80 font-light  ">
                  Animation
                </p>
              </div>
            </Link>
            <Link to={'https://www.w3schools.com/js/'} className=" bg-[#1A1A1A] hover:border hover:border-dashed border border-transparent hover:border-white/40 p-4 group cursor-pointer flex items-center gap-3  rounded-sm text-text01 font-medium text-sm">
              <div
                className="bg-black
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
            <Link to={'https://redux-toolkit.js.org/'} className="  bg-[#1A1A1A] hover:border hover:border-dashed border border-transparent hover:border-white/40 p-4 group cursor-pointer flex items-center gap-3  rounded-sm text-text01 font-medium text-sm">
              <div
                className="bg-black
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
            <Link to={'https://www.w3schools.com/Html/'} className="  bg-[#1A1A1A] hover:border hover:border-dashed border border-transparent hover:border-white/40 p-4 group cursor-pointer flex items-center gap-3  rounded-sm text-text01 font-medium text-sm">
              <div
                className="bg-black
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
            <Link to={'https://react.dev/'} className="  bg-[#1A1A1A] hover:border hover:border-dashed border border-transparent hover:border-white/40 p-4 group cursor-pointer flex items-center gap-3  rounded-sm text-text01 font-medium text-sm">
              <div
                className="bg-black
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
            <Link to={'https://www.w3schools.com/css/'} className="  bg-[#1A1A1A] hover:border hover:border-dashed border border-transparent hover:border-white/40 p-4 group cursor-pointer flex items-center gap-3  rounded-sm text-text01 font-medium text-sm">
              <div
                className="bg-black
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
            <Link to={'https://tailwindcss.com/'} className="  bg-[#1A1A1A] hover:border hover:border-dashed border border-transparent hover:border-white/40 p-4 group cursor-pointer flex items-center gap-3  rounded-sm text-text01 font-medium text-sm">
              <div
                className="bg-black
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
            <Link to={'https://www.typescriptlang.org/'} className="  bg-[#1A1A1A] hover:border hover:border-dashed border border-transparent hover:border-white/40 p-4 group cursor-pointer flex items-center gap-3  rounded-sm text-text01 font-medium text-sm">
              <div
                className="bg-black
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
            <Link to={'https://git-scm.com/'} className="  bg-[#1A1A1A] hover:border hover:border-dashed border border-transparent hover:border-white/40 group cursor-pointer flex items-start gap-3 p-4  rounded-sm text-text01 font-medium text-sm ">
              <div
                className="bg-black
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
      </div>
    </Container>
  </motion.div>
  )
}

export default Stack