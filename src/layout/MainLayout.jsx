import { Outlet } from "react-router"
import Sidebar from "../components/Sidebar"


function MainLayout() {
  return (
    <div className="flex font-manrope">
        <div className="w-2/12 bg-black border-r border-gray-400 ">
            <Sidebar/>
        </div>
        <div className="w-10/12 bg-black">
        <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout