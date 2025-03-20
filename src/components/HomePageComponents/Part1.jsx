import Container from "../Container";

function Part1() {
  return (
    <div>
      <Container>
        <div className="text-white h-screen p-10 pt-20 border-r border-l border-dashed border-white/13">
          <div className="flex flex-col  gap-2">
            <div className="flex items-center pb-4 gap-3">
              <div className="size-6 overflow-hidden  rounded-full">
                <img
                  className="w-full h-full object-cover"
                  src="https://framerusercontent.com/images/HqoHkPp6dpJFdgMqUKIaAXmy7o.jpg?scale-down-to=512"
                  alt=""
                />
              </div>
              <p className="text-text01 text-sm font-semibold font-manrope">
                Doubled growth in 6 months with Andrew.
              </p>
            </div>
            <h2 className="text-4xl font-inter font-medium leading-[45px] tracking-tighter w-7/12">
              I’m Andrew, creating tech magic from the pulse of{" "}
              <span className="text-text01">urban innovation.</span>
            </h2>
            <p className=" font-semibold text-text01 leading-[25px] w-6/12 pt-4">
              I specialize in creating visually stunning designs that leave a
              lasting impression.
            </p>

            <div className="py-8 flex items-center gap-4">
              <button className="flex  group items-center gap-2  relative px-4 py-2 rounded-xl bg-gradient-to-b  text-white border border-gray-700 shadow-md from-gray-700 to-gray-900 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 realtive z-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
                <h4 className="relative z-10 text-text01 font-semibold text-sm">Contact Me</h4>

                <div className="absolute top-0 left-0 w-full  group-hover:bg-white/5 h-full bg-black/50 hover:scale-110 z-2 group-hover:blur-lg">

                </div>
              </button>

              <h4>10:46 PM</h4>
            </div>

            <div className="pt-14">
              <h3 className="text-lg font-medium text-text01 pb-2">Trusted by the best</h3>
              <div className="flex text-text01 titems-center gap-4">
                <div>Syspia</div>
                <div>Collection</div>
                <div>Yuropia</div>
                <div>Labout</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Part1;
