import Part1 from "../components/HomePageComponents/Part1"
import Part2 from "../components/HomePageComponents/Part2"
import Part3 from "../components/HomePageComponents/Part3"
import Part4 from "../components/HomePageComponents/Part4"
import Part5 from "../components/HomePageComponents/Part5"


function Home() {
  return (
    <div className=" w-full bg-[#151515]">
      <Part1/>
      <Part2/>
      <Part3/>
      <Part4/>
      <Part5/>
    </div>
  )
}

export default Home