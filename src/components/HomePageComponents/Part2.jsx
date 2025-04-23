import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import { ArrowUpRight, Calendar, ChevronLeft, ChevronRight, LucideUsersRound } from "lucide-react";
import { Link } from "react-router";
import { projectData } from "@/lib/staticData";

function Part2() {
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  console.log(isEnd, isStart);

  const swiperRef = useRef(null);




  return (
    <div className="w-full px-16 py-24 h-full border-y border-white/15 border-dashed">
      <div className="flex items-center pb-4 justify-between ">
        <h3 className="text-text01 font-semibold ">Featured work</h3>
        <Link to={'/projects'}>
        <h3 className="text-base font-semibold text-text01 cursor-pointer transition-all duration-200 hover:text-white flex items-center group gap-2">All projects <ArrowUpRight strokeWidth={1.2} className="group-hover:rotate-45 transition-all duration-200 " /></h3>
        </Link>
      </div>
      <div className="w-10/12 relative max-w-[1300px]  ">
        <div className="flex justify-between absolute top-1/2 -translate-y-1/2 z-[10] items-center px-10 w-full">
          <button
            className={`p-2 cursor-pointer rounded-full relative z-[10] custom-prev bg-black text-white ${
              isStart ? "opacity-0" : ""
            }`}
          >
            <ChevronLeft size={28} />
          </button>
          <button
            className={`p-2 cursor-pointer rounded-full relative z-[10] custom-next bg-black text-white  ${
              isEnd ? "opacity-0" : ""
            }`}
          >
            <ChevronRight size={28} />
          </button>
        </div>
        <Swiper
          slidesPerView={2.2}
          spaceBetween={25}
          loop={false} // Disable looping to detect start & end
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[Navigation]}
          slideNextClass="swiper-slide-next"
          slidePrevClass="swiper-slide-prev"
          allowTouchMove={false} // Prevents swiping
          onSwiper={(swiper) => {
            setIsStart(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
            swiperRef.current = swiper;
            swiper.on("slideChange", () => {
              setIsStart(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            });
          }}
          className="mySwiper w-full "
        >
          {
            projectData.map(project => (
              <SwiperSlide>
              <Link key={project.id} to={`/project-details/${project?.id}`}>
              <div   className=" relative overflow-hidden cursor-pointer group border border-white/20 p-px rounded-xl  w-full ">
                <div className="overflow-hidden  h-[350px]">
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
            </SwiperSlide>
            ))
          }
        </Swiper>
        {/* Left Blur Effect (Show only if NOT at the start) */}
        {isEnd && (
          <div className="absolute top-0 left-0 w-40 h-full z-[1] bg-gradient-to-l from-transparent via-black/50 to-black pointer-events-none duration-300 transition-all"></div>
        )}

        {/* Right Blur Effect (Show only if NOT at the end) */}
        {isStart && (
          <div className="absolute top-0 right-0 w-40 h-full z-[1] bg-gradient-to-l from-black via-black/50 to-transparent  pointer-events-none transition-all duration-300"></div>
        )}
      </div>
    </div>
  );
}

export default Part2;
