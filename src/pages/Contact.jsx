import Container from "@/components/Container";
import { Mail, Phone } from "lucide-react";
import { FaLinkedin, FaMailchimp, FaPhone, FaTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";

import {motion} from 'framer-motion'
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <motion.div initial={{filter: 'blur(10px)'}} animate={{filter: 'blur(0px)'}} transition={{duration: 0.3, ease: 'easeIn'}}>
      <Container>
        <Helmet>
          <title>SM - Contact</title>
        </Helmet>
        <div className="text-white min-h-screen  relative  p-10 pt-20 border-r border-l border-dashed border-white/13">
          <div>
            <div className="pb-20">
              <h3 className="text-3xl font-medium pb-4">Get in Touch</h3>
              <p className="text-text01 font-medium w-6/12">
                Let's connect and start something great, tailored just for you.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-[#1A1A1A] ">
              <form action="" className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-text01 text-sm" htmlFor="">
                    Name
                  </label>
                  <input
                  placeholder="You name"
                    className="px-4 py-2 text-text01 text-sm border-white/10 focus:outline-none focus:border-blue-500  rounded-md border bg-[#1F1F1F]"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-text01 text-sm" htmlFor="">
                    Company
                  </label>
                  <input
                  placeholder="Email"
                    className="px-4 py-2 text-text01 text-sm border-white/10  focus:border-blue-500 focus:outline-none rounded-md border bg-[#1F1F1F]"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="col-span-2 flex flex-col gap-2 pt-2">
                  <label className="text-text01 text-sm" htmlFor="">
                    Message
                  </label>
                  <textarea
                    placeholder="Express your word here..."
                    className="px-4 text-text01 text-sm  h-[200px] w-full py-2 border-white/10  focus:border-blue-500 focus:outline-none rounded-md border bg-[#1F1F1F]"
                    name=""
                    id=""
                  ></textarea>
                </div>

                <div className="col-span-2 pt-2">
                  <button className="bg-white cursor-pointer font-medium text-sm text-black w-full py-3 rounded-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className="pt-20">
              <h3 className="text-text01 pb-8">Contact Info</h3>

              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="flex items-center gap-2">
                  <IoMailOutline strokeWidth={1.5} /> Email
                  </h4>
                  <h4 className="text-text01">solaimansiam93@gmail.com</h4>
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="flex items-center gap-2">
                  <FiPhone strokeWidth={1.5} /> Phone
                  </h4>
                  <h4 className="text-text01">+8801842947481</h4>
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="flex items-center gap-2">
                  <TbBrandLinkedin  strokeWidth={1.5}  /> Linkedin
                  </h4>
                  <h4 className="text-text01">@mdsolaimansiam</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}

export default Contact;
