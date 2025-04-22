import Container from "@/components/Container";
import { projectData } from "@/lib/staticData";
import axios from "axios";
import { motion, useScroll } from "framer-motion";
import { Fingerprint } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ProjectDetails() {


  const [filteredData, setFilteredData] = useState({})
  const {id} = useParams()


  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/projectData.json');

        console.log(res.data);
        const filtered = res?.data.filter(item => item.id === id);
        setFilteredData(filtered);
        console.log(filtered);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })()
  },[id])
  





  

  return (
    <motion.div
      initial={{ filter: "blur(10px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <Container>
        <div className="text-white min-h-screen  relative  p-10 pt-20 border-r border-l border-dashed border-white/13">
          <div className="pb-20">
            <h3 className="text-3xl font-medium pb-4">Project Details</h3>
            <p className="text-text01 font-medium w-6/12">
              The tools and technologies that power my work, every step of the
              way.
            </p>
          </div>

          <div className="text-white    border-dashed border-white/13"></div>
        </div>
      </Container>
    </motion.div>
  );
}

export default ProjectDetails;
