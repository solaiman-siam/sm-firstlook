import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, LucideUsersRound } from "lucide-react";

function Part2() {
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  console.log(isEnd, isStart);

  const swiperRef = useRef(null);

  return (
    <div className="w-full p-16 h-full border-y border-white/15 border-dashed">
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
          <SwiperSlide>
            <div className=" relative border border-white/30 p-px rounded-xl overflow-hidden w-full ">
              <img
                className="w-full  "
                src="https://framerusercontent.com/images/bE5C7AyfhrXV8b2NK9vhMlEFmQ.png?scale-down-to=1024"
                alt=""
              />
              <div className="bg-[#1A1A1A] p-4 flex font-manrope flex-col gap-2 text-white">
                <h3 className="text-white font-medium">Boring Corporation</h3>
                <div className="flex items-center gap-4">
                <div className="flex text-text01 items-center gap-1">
                <LucideUsersRound size={18} />
                  <h4 className="text-text01 font-medium">1 Forme</h4>
                </div>
                <div className="flex text-text01 font-medium items-center gap-1">
                <Calendar size={18} />
                <h4 className="text-text01 font-medium">2024</h4>
                </div>
                </div>
              </div>
              <div className="absolute w-full h-full top-0 left-0 bg-black/20 "></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full  relative">
              <img
                className="w-full  "
                src="https://framerusercontent.com/images/48LJFlilXLSdS3uCFT4SzAtKXk.png?scale-down-to=1024"
                alt=""
              />
              <div className="bg-[#1A1A1A] p-4 flex font-manrope flex-col gap-2 text-white">
                <h3 className="text-white font-medium">Boring Corporation</h3>
                <div className="flex items-center gap-4">
                <div className="flex text-text01 items-center gap-1">
                <LucideUsersRound size={18} />
                  <h4 className="text-text01 font-medium">1 Forme</h4>
                </div>
                <div className="flex text-text01 font-medium items-center gap-1">
                <Calendar size={18} />
                <h4 className="text-text01 font-medium">2024</h4>
                </div>
                </div>
              </div>
              <div className="absolute w-full h-full top-0 left-0 bg-black/20 "></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full  relative ">
              <img
                className="w-full  "
                src="https://framerusercontent.com/images/CJbJZoABTeTe4WI9eiVQquP0U.png?scale-down-to=1024"
                alt=""
              />
              <div className="bg-[#1A1A1A] p-4 flex font-manrope flex-col gap-2 text-white">
                <h3 className="text-white font-medium">Boring Corporation</h3>
                <div className="flex items-center gap-4">
                <div className="flex text-text01 items-center gap-1">
                <LucideUsersRound size={18} />
                  <h4 className="text-text01 font-medium">1 Forme</h4>
                </div>
                <div className="flex text-text01 font-medium items-center gap-1">
                <Calendar size={18} />
                <h4 className="text-text01 font-medium">2024</h4>
                </div>
                </div>
              </div>
              <div className="absolute w-full h-full top-0 left-0 bg-black/20 "></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full  relative ">
              <img
                className="w-full  "
                src="https://framerusercontent.com/images/CJbJZoABTeTe4WI9eiVQquP0U.png?scale-down-to=1024"
                alt=""
              />
              <div className="bg-[#1A1A1A] p-4 flex font-manrope flex-col gap-2 text-white">
                <h3 className="text-white font-medium">Boring Corporation</h3>
                <div className="flex items-center gap-4">
                <div className="flex text-text01 items-center gap-1">
                <LucideUsersRound size={18} />
                  <h4 className="text-text01 font-medium">1 Forme</h4>
                </div>
                <div className="flex text-text01 font-medium items-center gap-1">
                <Calendar size={18} />
                <h4 className="text-text01 font-medium">2024</h4>
                </div>
                </div>
              </div>
              <div className="absolute w-full h-full top-0 left-0 bg-black/20 "></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full  relative">
              <img
                className="w-full  "
                src="https://framerusercontent.com/images/bE5C7AyfhrXV8b2NK9vhMlEFmQ.png?scale-down-to=1024"
                alt=""
              />
              <div className="bg-[#1A1A1A] p-4 flex font-manrope flex-col gap-2 text-white">
                <h3 className="text-white font-medium">Boring Corporation</h3>
                <div className="flex items-center gap-4">
                <div className="flex text-text01 items-center gap-1">
                <LucideUsersRound size={18} />
                  <h4 className="text-text01 font-medium">1 Forme</h4>
                </div>
                <div className="flex text-text01 font-medium items-center gap-1">
                <Calendar size={18} />
                <h4 className="text-text01 font-medium">2024</h4>
                </div>
                </div>
              </div>
              <div className="absolute w-full h-full top-0 left-0 bg-black/20 "></div>
            </div>
          </SwiperSlide>
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
