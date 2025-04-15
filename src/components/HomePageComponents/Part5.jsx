import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CommonButton from "../sharedComponents/CommonButton";

function Part5() {
  return (
    <div className="w-full  px-16 py-24 h-full border-y border-white/15 border-dashed">
      <div className="flex items-center gap-8">
        <div className="flex-1 text-white">
          <h3 className="text-[42px] font-semibold">
            Your Questions <span className="font-instrument font-medium italic text-text01">Answered</span>
          </h3>
          <p className="text-text01 pt-4 w-8/12 pb-8 font-medium">
            Find the answers to our most common questions here, but if you still
            need help, feel free to contact me.{" "}
          </p>

          <CommonButton innerText={'Contact Me'}/>
        </div>
        <div className="flex-1 text-white">
          <Accordion type="single" collapsible className="w-full space-y-4 font-inter">
            <AccordionItem className={' bg-[#1c1c1c] border-white/5 cursor-pointer px-8 py-3 border  rounded-md'} value="item-1">
              <AccordionTrigger className={'underline-none text-white/90 hover:no-underline font-medium text-[17px] '}>Who is Solaiman?</AccordionTrigger>
              <AccordionContent className="overflow-hidden text-text01 text-sm transition-all text-[17px] data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
              I'm a React frontend developer with a passion for crafting intuitive, pixel-perfect user interfaces. My journey started with self-learning, grew through the Programming Hero course, and led me to my current role at Softvence Agency, where I bring designs to life through clean, scalable code.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className={' bg-[#1c1c1c] border-white/5 cursor-pointer px-8 py-3 border  rounded-md'} value="item-2">
              <AccordionTrigger className={'underline-none text-white/90 hover:no-underline font-medium text-[17px] '}>What services do you provide?</AccordionTrigger>
              <AccordionContent className="overflow-hidden text-text01 text-sm transition-all text-[17px] data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
              I specialize in building modern, responsive websites and web applications using React. My services include frontend development, UI implementation, animation integration with Framer Motion, performance optimization, and ensuring seamless user experiences across devices.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className={' bg-[#1c1c1c] border-white/5 cursor-pointer px-8 py-3 border  rounded-md'} value="item-3">
              <AccordionTrigger className={'underline-none text-white/90 hover:no-underline font-medium text-[17px] '}>What is your approach to web design?</AccordionTrigger>
              <AccordionContent className="overflow-hidden text-text01 text-sm transition-all text-[17px] data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
              I believe in design with purpose — blending aesthetics and functionality. I work closely with designers (or bring my own design sense) to create interfaces that are not just visually engaging, but also accessible, performant, and user-friendly. Every line of code I write is aimed at delivering a smooth and memorable digital experience.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Part5;
