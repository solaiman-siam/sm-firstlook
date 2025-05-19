import Lottie from "lottie-react"
import LoaderCoffee from '../assets/images/loaderCoffe.json'
function Loader() {
  return (
    <div className="w-screen overflow-hidden flex justify-center items-center h-screen bg-white">
        <div className="">
        <Lottie className="lg:w-96 w-60 w-60 lg:h-96" animationData={LoaderCoffee} loop={true} />
        </div>
    </div>
  )
}

export default Loader