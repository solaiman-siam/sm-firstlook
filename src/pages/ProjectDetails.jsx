import Container from "@/components/Container";
import GithubLink from "@/components/sharedComponents/GithubLink";
import LiveLink from "@/components/sharedComponents/LiveLink";
import { projectData } from "@/lib/staticData";
import axios from "axios";
import { motion, useScroll } from "framer-motion";
import parse from "html-react-parser";
import {
  ArrowUpRight,
  Calendar,
  ExternalLink,
  Fingerprint,
  LucideUsersRound,
  Undo2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
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

  const description = "";

  return (
    <motion.div
      initial={{ filter: "blur(10px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <Helmet>
        <title>SM - Project Details</title>
      </Helmet>
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
                <LiveLink
                  innerText={"Live Link"}
                  link={filteredData.live_link}
                />
                <GithubLink
                  innerText={"Github Link"}
                  link={filteredData.github_link}
                />
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

            <div className="text-white/90 w-11/12 project-details pt-8">
              {parse(String(filteredData?.description))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg  pb-4 font-semibold">Tools</h4>
              <div className=" flex flex-wrap w-6/12 pt-1 gap-3">
                {filteredData?.tools?.map((item) => (
                  <h4 className="px-4 py-1 rounded-lg bg-white/20">{item}</h4>
                ))}
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
