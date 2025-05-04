import Part6 from "@/components/HomePageComponents/Part6";
import Part1 from "../components/HomePageComponents/Part1";
import Part2 from "../components/HomePageComponents/Part2";
import Part3 from "../components/HomePageComponents/Part3";
import Part4 from "../components/HomePageComponents/Part4";
import Part5 from "../components/HomePageComponents/Part5";
import Part7 from "@/components/HomePageComponents/Part7";
import Footer from "@/components/Footer";
import Part8 from "@/components/HomePageComponents/Part8";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <motion.div
      initial={{ filter: "blur(10px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className=" w-full bg-[#151515]"
    >
      <Helmet>
        <title>SM - Home</title>
      </Helmet>
      <Part1 />
      <Part2 />
      <Part3 />
      {/* <Part4/> */}
       <Part5 /> 
      <Part6 />
      <Part7 />
      <Part8 />
      {/* <Footer/> */}
    </motion.div>
  );
}

export default Home;
