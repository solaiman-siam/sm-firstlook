import { ArrowUpRight } from "lucide-react"
import Container from "../Container"


function Part3() {
  return (
    <div>
    <Container>
      <div className="text-white p-4 lg:p-10 py-20 border-r border-l border-dashed border-white/13">
        <div className="flex items-center justify-between ">
            <h3 className="text-text01 font-semibold">Who I am</h3>
            <h3 className="text-text01 font-semibold flex items-center hover:text-white transition-all duration-300 cursor-pointer gap-2 group">What I offer <ArrowUpRight strokeWidth={1.2} className="group-hover:rotate-45 transition-all duration-200 " /></h3>
        </div>
        <div className="flex flex-col gap-6 text-white/85 pt-8 font-semibold">
            <p>Hey, I’m Solaiman — a frontend developer passionate about building clean, dynamic, and user-focused web experiences.
            Currently, I’m bringing ideas to life at   <span className="text-[#0F90D6] underline cursor-pointer">Softvence Agency</span>, where I specialize in crafting responsive and performant interfaces using React.</p>

            <p>Before joining <span className="text-[#0F90D6] underline cursor-pointer">Softvence</span> , I honed my skills through the Programming Hero course, where I consistently stood out with top performance. Even before that, I was a self-taught developer, driven by curiosity and a love for turning code into creation.</p>
            <p>From self-learning to agency work, my journey has shaped me into a developer who values both form and function — and I’m just getting started.</p>
        </div>

        <div className="lg:pt-16 pt-10 flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row items-start lg:gap-0 gap-1  lg:items-center justify-between">
                <div className="flex items-center gap-2.5">
                <img className="w-6 h-6 rounded-full" src="https://i.ibb.co.com/hxJ6Yxjz/softvence.png" alt="" />
                <h4 className="text-white font-semibold font-manrope">Softvence Agency</h4>
                </div>
                <div className="flex-1 border-[0.5px] border-white/13 border-dashed mx-4">

                </div>
                <div className="flex items-center lg:gap-2 gap-4 ">
                    <h4 className="text-text01 font-semibold font-manrope">Lead developer</h4>
                    <h4 className="text-[#686868] font-medium font-mono ">2024-NOW</h4>
                </div>
            </div>
            {/* <div className="flex  items-center justify-between">
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
            </div> */}
        </div>
      </div>
    </Container>
  </div>
  )
}

export default Part3