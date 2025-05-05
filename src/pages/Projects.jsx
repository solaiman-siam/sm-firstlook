import Container from "@/components/Container";
import { projectData } from "@/lib/staticData";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, LucideUsersRound } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";

function Projects() {
  return (
    <motion.div
      initial={{ filter: "blur(10px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
       <Helmet>
                <title>SM - Projects</title>
              </Helmet>
      <Container>
        <div className="text-white min-h-screen  relative p-4  lg:p-10 pt-20 border-r border-l border-dashed border-white/13">
          <div className=" pb-10 lg:pb-20">
            <h3 className="text-3xl font-medium pb-4">Recent projects</h3>
            <p className="text-text01 font-medium w-8/12 lg:w-6/12">
              Dive into the portfolio of a design journey well-traveled.
            </p>
          </div>
          <div className="space-y-10 flex flex-col gap-4">
            {
              projectData.map(project => (
                <Link key={project.id} to={`/project-details/${project?.id}`}>
              <div   className=" relative overflow-hidden cursor-pointer group border border-white/20 p-px rounded-xl  w-full ">
                <div className="overflow-hidden h-[250px] lg:h-[450px]">
                <img
                  className="w-full transition-all duration-300 group-hover:scale-110"
                  src={project?.project_image}
                  alt=""
                />
                </div>
                <div className="bg-[#1A1A1A] group-hover:bg-[#232323] transition-all duration-300  items-center justify-between  p-4 flex font-manrope  text-white">
                  <div className="flex flex-col  gap-2">
                  <h3 className="text-white font-medium">{project.project_name}</h3>
                  <div className="flex items-center gap-4">
                  <div className="flex text-text01 items-center gap-1">
                  <LucideUsersRound size={18} />
                    <h4 className="text-text01 font-medium">{project?.project_views} Views</h4>
                  </div>
                  <div className="flex text-text01 font-medium items-center gap-1">
                  <Calendar size={18} />
                  <h4 className="text-text01 font-medium">{project?.project_year}</h4>
                  </div>
                  </div>
                  </div>
                  <ArrowUpRight className="group-hover:rotate-45 transition-all duration-300" strokeWidth={1.2}/>
                </div>
                <div className="absolute w-full h-full top-0 left-0 bg-black/10 "></div>
              </div>
              </Link>
              ))
            }

          </div>
        </div>
      </Container>
    </motion.div>
  );
}

export default Projects;
