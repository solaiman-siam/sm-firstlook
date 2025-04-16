import Part6 from "@/components/HomePageComponents/Part6"
import Part1 from "../components/HomePageComponents/Part1"
import Part2 from "../components/HomePageComponents/Part2"
import Part3 from "../components/HomePageComponents/Part3"
import Part4 from "../components/HomePageComponents/Part4"
import Part5 from "../components/HomePageComponents/Part5"
import Part7 from "@/components/HomePageComponents/Part7"
import Footer from "@/components/Footer"
import Part8 from "@/components/HomePageComponents/Part8"


function Home() {
  return (
    <div className=" w-full bg-[#151515]">
      <Part1/>
      <Part2/>
      <Part3/>
      {/* <Part4/> */}
      <Part5/>
      <Part6/>
      <Part7/>
      <Part8/>
      <Footer/>
    </div>
  )
}

export default Home