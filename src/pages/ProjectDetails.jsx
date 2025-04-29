import Container from "@/components/Container";
import GithubLink from "@/components/sharedComponents/GithubLink";
import LiveLink from "@/components/sharedComponents/LiveLink";
import { projectData } from "@/lib/staticData";
import axios from "axios";
import { motion, useScroll } from "framer-motion";
import parse from 'html-react-parser';
import {
  ArrowUpRight,
  Calendar,
  ExternalLink,
  Fingerprint,
  LucideUsersRound,
  Undo2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function ProjectDetails() {
  const [filteredData, setFilteredData] = useState({});
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/projectData.json");
        const filtered = res?.data.filter((item) => item.id === Number(id));
        setFilteredData(filtered[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [id]);

  console.log(filteredData);

  const description = "<section> <h2>Nova Motor Company — Car Sales and Customization Platform</h2> <p>Nova Motor Company is a modern web application built to streamline the process of browsing, purchasing, and customizing motor vehicles. Designed with a strong focus on user experience, the platform offers a clean, responsive interface and intuitive navigation that makes it easy for customers to explore a wide range of vehicles.</p> <p>A standout feature of Nova Motor Company is its powerful car configurator tool, allowing users to personalize their chosen vehicles in real-time. Customers can customize aspects such as the car’s color, wheels, rooftop, and other key features to match their preferences before making a purchase decision.</p> <h3>Key Features:</h3> <ul> <li>Full vehicle catalog with detailed filtering and search capabilities</li> <li>Interactive car configurator for customizing vehicle colors, wheels, rooftop, and more</li> <li>Fully responsive design for seamless browsing across devices</li> <li>Smooth and intuitive user experience optimized for engagement and conversions</li> </ul> </section>"

  return (
    <motion.div
      initial={{ filter: "blur(10px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <Container>
        <div className="text-white min-h-screen  relative  p-10 pt-20 border-r border-l border-dashed border-white/13">
          <div className="pb-20">
            <Link to={"/"}>
              <button className="mb-4 cursor-pointer text-text01 flex items-center  gap-1">
                <Undo2 size={22} strokeWidth={2} /> Back
              </button>
            </Link>
            <h3 className="text-3xl font-medium pb-4">
              {filteredData?.project_name}
            </h3>
            <div className="   items-center justify-between pt-4 flex font-manrope  text-white">
              <div className="flex   gap-4">
                <LiveLink innerText={'Live Link'} link={filteredData.live_link}/>
                <GithubLink innerText={'Github Link'} link={filteredData.github_link}/>
              </div>
              {/* <ArrowUpRight className="group-hover:rotate-45 transition-all duration-300" strokeWidth={1.2}/> */}
            </div>

            <div className=" relative mt-10 overflow-hidden cursor-pointer group border border-white/20 p-px rounded-xl  w-full ">
              <div className="overflow-hidden  h-[450px]">
                <img
                  className="w-full transition-all duration-300 group-hover:scale-110"
                  src={filteredData?.project_image}
                  alt=""
                />
              </div>
              <div className="absolute w-full h-full top-0 left-0 bg-black/10 "></div>
            </div>

            <h3 className="py-8 text-lg  text-text01 ">Overview</h3>
            <p className="text-white/90 w-9/12">{filteredData.description}</p>

            <div className="pt-8" >
              <h4 className="text-lg text-text01 pb-4">Tools</h4>
              <div className=" flex flex-wrap w-6/12 pt-4 gap-3">
              {
                filteredData?.tools?.map(item => (
                  <h4 className="px-4 py-1 rounded-lg bg-white/20">{item}</h4>

                ))
              }
              </div>
            </div>
          </div>
          <div className="text-white    border-dashed border-white/13"></div>
        </div>
      </Container>
    </motion.div>
  );
}

export default ProjectDetails;
