import Container from "@/components/Container";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, LucideUsersRound } from "lucide-react";

function Projects() {
  return (
    <motion.div
      initial={{ filter: "blur(10px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <Container>
        <div className="text-white min-h-screen  relative  p-10 pt-20 border-r border-l border-dashed border-white/13">
          <div className="pb-20">
            <h3 className="text-3xl font-medium pb-4">Recent projects</h3>
            <p className="text-text01 font-medium w-6/12">
              Dive into the portfolio of a design journey well-traveled.
            </p>
          </div>
          <div className="space-y-10">
            <div className=" relative group border border-white/20 p-px rounded-xl overflow-hidden w-full ">
              <div className="overflow-hidden h-[450px]">
                <img
                  className="w-full transition-all duration-300  group-hover:scale-110"
                  src="https://framerusercontent.com/images/bE5C7AyfhrXV8b2NK9vhMlEFmQ.png?scale-down-to=1024"
                  alt=""
                />
              </div>
              <div className="bg-[#1A1A1A] group-hover:bg-[#232323] transition-all duration-300  items-center justify-between  p-4 flex font-manrope  text-white">
                <div className="flex flex-col  gap-2">
                  <h3 className="text-white font-medium">Boring Corporation</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex text-text01 items-center gap-1">
                      <LucideUsersRound size={18} />
                      <h4 className="text-text01 font-medium">1 Forme</h4>
                    </div>
                    <div className="flex text-text01 font-medium items-center gap-1">
                      <Calendar size={18} />
                      <h4 className="text-text01 font-medium">2024</h4>
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  className="group-hover:rotate-45 transition-all duration-300"
                  strokeWidth={1.2}
                />
              </div>
              <div className="absolute w-full h-full top-0 left-0 bg-black/20 "></div>
            </div>
            <div className=" relative group border border-white/20 p-px rounded-xl overflow-hidden w-full ">
              <div className="overflow-hidden h-[450px]">
                <img
                  className="w-full transition-all duration-300  group-hover:scale-110"
                  src="https://framerusercontent.com/images/bE5C7AyfhrXV8b2NK9vhMlEFmQ.png?scale-down-to=1024"
                  alt=""
                />
              </div>
              <div className="bg-[#1A1A1A] group-hover:bg-[#232323] transition-all duration-300  items-center justify-between  p-4 flex font-manrope  text-white">
                <div className="flex flex-col  gap-2">
                  <h3 className="text-white font-medium">Boring Corporation</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex text-text01 items-center gap-1">
                      <LucideUsersRound size={18} />
                      <h4 className="text-text01 font-medium">1 Forme</h4>
                    </div>
                    <div className="flex text-text01 font-medium items-center gap-1">
                      <Calendar size={18} />
                      <h4 className="text-text01 font-medium">2024</h4>
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  className="group-hover:rotate-45 transition-all duration-300"
                  strokeWidth={1.2}
                />
              </div>
              <div className="absolute w-full h-full top-0 left-0 bg-black/20 "></div>
            </div>
            <div className=" relative group border border-white/20 p-px rounded-xl overflow-hidden w-full ">
              <div className="overflow-hidden h-[450px]">
                <img
                  className="w-full transition-all duration-300  group-hover:scale-110"
                  src="https://framerusercontent.com/images/bE5C7AyfhrXV8b2NK9vhMlEFmQ.png?scale-down-to=1024"
                  alt=""
                />
              </div>
              <div className="bg-[#1A1A1A] group-hover:bg-[#232323] transition-all duration-300  items-center justify-between  p-4 flex font-manrope  text-white">
                <div className="flex flex-col  gap-2">
                  <h3 className="text-white font-medium">Boring Corporation</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex text-text01 items-center gap-1">
                      <LucideUsersRound size={18} />
                      <h4 className="text-text01 font-medium">1 Forme</h4>
                    </div>
                    <div className="flex text-text01 font-medium items-center gap-1">
                      <Calendar size={18} />
                      <h4 className="text-text01 font-medium">2024</h4>
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  className="group-hover:rotate-45 transition-all duration-300"
                  strokeWidth={1.2}
                />
              </div>
              <div className="absolute w-full h-full top-0 left-0 bg-black/20 "></div>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}

export default Projects;
