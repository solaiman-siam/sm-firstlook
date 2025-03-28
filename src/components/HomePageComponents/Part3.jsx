import { ArrowUpRight } from "lucide-react"
import Container from "../Container"


function Part3() {
  return (
    <div>
    <Container>
      <div className="text-white  p-10 py-20 border-r border-l border-dashed border-white/13">
        <div className="flex items-center justify-between ">
            <h3 className="text-text01 font-semibold">Who I am</h3>
            <h3 className="text-text01 font-semibold flex items-center hover:text-white transition-all duration-300 cursor-pointer gap-2 group">What I offer <ArrowUpRight strokeWidth={1.2} className="group-hover:rotate-45 transition-all duration-200 " /></h3>
        </div>
        <div className="flex flex-col gap-6 text-white/85 pt-8 font-semibold">
            <p>Hey, I’m Andrew, a product and graphic designer with a knack for creating meaningful, user-friendly designs. Right now, I’m leading design at <span className="text-[#0F90D6] underline cursor-pointer">NexusLab</span>, where we’re redefining digital interactions.</p>

            <p>Before <span className="text-[#0F90D6] underline cursor-pointer">NexusLab</span>, I spent a few years at BrightPath, crafting intuitive designs for cutting-edge apps. I’ve also worked with Flux Studios, PixelForge, and Orbital Designs, focusing on branding and UX.</p>
            <p>My journey began at Ascend Innovations, where I discovered my passion for product design. With years of experience, I’m ready to make your next project both functional and memorable.</p>
        </div>

        <div className="pt-16 flex flex-col gap-6">
            <div className="flex  items-center justify-between">
                <div className="flex items-center gap-2.5">
                <img className="w-6 h-6 rounded-full" src="https://framerusercontent.com/images/hLqJBOiVfiLC4TxMpZP7EUZUoE.svg" alt="" />
                <h4 className="text-white font-semibold font-manrope">Flux Studios</h4>
                </div>
                <div className="flex-1 border-[0.5px] border-white/13 border-dashed mx-4">

                </div>
                <div className="flex items-center gap-2">
                    <h4 className="text-text01 font-semibold font-manrope">Lead designer</h4>
                    <h4 className="text-[#686868] font-medium font-mono ">2020-NOW</h4>
                </div>
            </div>
            <div className="flex  items-center justify-between">
                <div className="flex items-center gap-2.5">
                <img className="w-6 h-6 rounded-full" src="https://framerusercontent.com/images/bgJoi2TylcSbXq2TGzS5SLlOCog.svg" alt="" />
                <h4 className="text-white font-semibold font-manrope">Orbital</h4>
                </div>
                <div className="flex-1 border-[0.5px] border-white/13 border-dashed mx-4">

                </div>
                <div className="flex items-center gap-2">
                    <h4 className="text-text01 font-semibold font-manrope">Freelance designer</h4>
                    <h4 className="text-[#686868] font-medium font-mono ">2020-NOW</h4>
                </div>
            </div>
            <div className="flex  items-center justify-between">
                <div className="flex items-center gap-2.5">
                <img className="w-6 h-6 rounded-full" src="https://framerusercontent.com/images/ixPcOyYWuHa8niZ28WLoqe9mXk.svg" alt="" />
                <h4 className="text-white font-semibold font-manrope">NexusLab</h4>
                </div>
                <div className="flex-1 border-[0.5px] border-white/13 border-dashed mx-4">

                </div>
                <div className="flex items-center gap-2">
                    <h4 className="text-text01 font-semibold font-manrope">Web designer</h4>
                    <h4 className="text-[#686868] font-medium font-mono ">2020-NOW</h4>
                </div>
            </div>
            <div className="flex  items-center justify-between">
                <div className="flex items-center gap-2.5">
                <img className="w-6 h-6 rounded-full" src="https://framerusercontent.com/images/dnRwpc4aSt6phcvyEeEKeCiXU.svg" alt="" />
                <h4 className="text-white font-semibold font-manrope">Bright</h4>
                </div>
                <div className="flex-1 border-[0.5px] border-white/13 border-dashed mx-4">

                </div>
                <div className="flex items-center gap-2">
                    <h4 className="text-text01 font-semibold font-manrope">Junior designer</h4>
                    <h4 className="text-[#686868] font-medium font-mono ">2020-NOW</h4>
                </div>
            </div>
            <div className="flex  items-center justify-between">
                <div className="flex items-center gap-2.5">
                <img className="w-6 h-6 rounded-full" src="https://framerusercontent.com/images/M1MmOtxAKw78TQbpehlTs1jWXGw.svg" alt="" />
                <h4 className="text-white font-semibold font-manrope">PixelForge</h4>
                </div>
                <div className="flex-1 border-[0.5px] border-white/13 border-dashed mx-4">

                </div>
                <div className="flex items-center gap-2">
                    <h4 className="text-text01 font-semibold font-manrope">Intern designer</h4>
                    <h4 className="text-[#686868] font-medium font-mono ">2020-NOW</h4>
                </div>
            </div>
        </div>
      </div>
    </Container>
  </div>
  )
}

export default Part3