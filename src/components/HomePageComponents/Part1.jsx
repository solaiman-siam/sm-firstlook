import { BackgroundBeams } from "../background-beams";
import Container from "../Container";
import CommonButton from "../sharedComponents/CommonButton";

function Part1() {


  const now = new Date();
const time = now.toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
});
  return (
    <div>
      <Container>
        <div className="text-white  relative  p-10 pt-20 border-r border-l border-dashed border-white/13">
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
                Passionate Web Developer.
              </p>
            </div>
            <h2 className="text-4xl font-inter font-medium leading-[45px] tracking-tighter w-8/12">
            Hi, I’m Solaiman — a React Frontend Developer 
              <span className="text-text01"> turning bold ideas into seamless digital experiences.</span>
            </h2>
            <p className=" font-semibold text-text01 leading-[25px] w-6/12 pt-4">
            Let’s bring your vision to life, one pixel at a time.
            </p>

            <div className="py-8 flex items-center gap-4">
             

             <CommonButton innerText={'Contact Me'}/>

              <h4>{time}</h4>
            </div>

            {/* <div className="pt-14">
              <h3 className="text-lg font-medium text-text01 pb-2">Trusted by the best</h3>
              <div className="flex text-text01 titems-center gap-4">
                <div className="text-sm font-medium">Syspia</div>
                <div className="text-sm font-medium">Collection</div>
                <div className="text-sm font-medium">Yuropia</div>
                <div className="text-sm font-medium">Labout</div>
              </div>
            </div> */}
          </div>
          <BackgroundBeams  />
        </div>
      </Container>
    </div>
  );
}

export default Part1;
