
import { motion } from "framer-motion"
import Container from "../Container"
import { BackgroundBeams } from "../background-beams"


function Part8() {


  const sentence = 'Design  is  not  just  what  it  looks  like  and feels like.  Design is how it works.         - steve jobs'


  return (
    <div className=" w-full relative border-t border-dashed border-white/10   flex justify-center items-center">
      <Container>
    <div className="w-full h-[300px]  lg:h-[400px] flex items-center ">
    <motion.div className="flex  relative z-[8] tracking-wider justify-center flex-wrap gap-1 p-10">
      <div className="flex flex-wrap w-[74%] lg:w-4/8 text-center justify-center text-white font-curve text-[28px] ">
      {sentence.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
            delay: index * 0.05,
          }}
          viewport={{ once: true }}
        >
          {char === " " ? "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0" : char}
        </motion.span>
      ))}
    </div>
    </motion.div>
      <div className="  absolute z-[6] w-full h-full top-0 left-0"></div>
    <BackgroundBeams  />
    </div>


      </Container>

    



    </div>
  )
}

export default Part8