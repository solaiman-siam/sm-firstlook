import CommonButton from "../sharedComponents/CommonButton";
import { RiFacebookCircleLine, RiLinkedinFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router";
function Part7() {
  return (
    <div className="w-full px-4 lg:px-16 py-10 lg:py-24 h-full border-t border-white/15 border-dashed">
      <div className="flex flex-col items-center gap-4 lg:gap-8">
        <div className="flex justify-center w-full  items-center pb-2 lg:pb-8 gap-4">
          <span className="w-10 h-[1px]  bg-gradient-to-r from-transparent to-white"></span>
          <h3 className=" text-center text-text01 font-medium">
            Reach out any time
          </h3>
          <span className="w-10 h-[1px] bg-gradient-to-r from-white to-transparent"></span>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="lg:text-[42px] text-3xl font-semibold text-white">
            Let’s Stay{" "}
            <span className="font-instrument font-medium italic text-text01">
              Connected
            </span>
          </h3>
          <p className="text-text01 w-full lg:w-7/12 text-center py-8">
            Got questions or want to collaborate? Feel free to reach out—I'm
            open to new projects or just a casual chat!
          </p>

          <CommonButton innerText={"Connect Me"} />

          <div className="flex py-8 text-white items-center divide-white/20  divide-x-2">
            <Link>
              <div className="px-8">
                <FaXTwitter
                  className="text-[#777777] hover:text-white transition-all duration-200 cursor-pointer"
                  size={24}
                />
              </div>
            </Link>
            <Link to={'https://www.linkedin.com/in/mdsolaiman-siam/'}>
              <div className="px-8">
                <SlSocialLinkedin
                  className="text-[#777777] hover:text-white transition-all duration-200 cursor-pointer"
                  size={24}
                />
              </div>
            </Link>
            <Link to={'https://www.facebook.com/solaimansiam.me'}>
              <div className="px-8">
                <RiFacebookCircleLine
                  className="text-[#777777] hover:text-white transition-all duration-200 cursor-pointer"
                  size={28}
                />
              </div>
            </Link>
          </div>

          <h4 className="text-white/80 font-medium text-center pt-0">
            solaimansiam93@gmail.com
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Part7;
