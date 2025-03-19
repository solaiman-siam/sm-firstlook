import { navMenus } from "../lib/staticData"

function Sidebar() {
  return (
    <div className="h-screen p-6">
      <div className="flex items-center gap-2 text-white">
        <div className="w-12 h-12 overflow-hidden rounded-lg ">
          <img className="w-full h-full object-cover" src="https://framerusercontent.com/images/Y7xGl21aQgHVU4UiWLBvVfD1dU.jpg?scale-down-to=512" alt="" />
        </div>
        <div className="flex flex-col  ">
        <p className="font-curve font-medium text-xl">Md Solaiman</p>
        <h4 className="font-manrope text-text01 text-sm font-medium">Web Developer </h4>
        </div>
      </div>


      <div className="flex flex-col gap-4">
        {
          navMenus.map(item => <div > {item.icon} <h4 className="font-manrope font-medium text-text01">{item.title}</h4> </div>)
        }
      </div>
    </div>
  )
}

export default Sidebar