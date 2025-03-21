import Container from "../Container";

function Part1() {
  return (
    <div>
      <Container>
        <div className="text-white  p-10 pt-20 border-r border-l border-dashed border-white/13">
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
             

              <button className="flex items-center group  bg-gradient-to-b transition-all  cursor-pointer  border-[1px] border-white/20 from-white/25 via-white/10 hover:via-white/10 to-white/15  gap-2 outline-4 px-3.5 py-2 rounded-lg hover:outline-white/15 outline-black">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 text-white/75 transition-all duration-200 group-hover:text-white/90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
                <h4 className="text-[15px] group-hover:text-white/90 text-white/75  transition-all duration-200 hover:text-white/85 font-medium">Contact Me</h4>
              </button>

              <h4>10:46 PM</h4>
            </div>

            <div className="pt-14">
              <h3 className="text-lg font-medium text-text01 pb-2">Trusted by the best</h3>
              <div className="flex text-text01 titems-center gap-4">
                <div className="text-sm font-medium">Syspia</div>
                <div className="text-sm font-medium">Collection</div>
                <div className="text-sm font-medium">Yuropia</div>
                <div className="text-sm font-medium">Labout</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Part1;
