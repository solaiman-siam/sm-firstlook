import Container from "../Container";

function Part6() {
  return (
    <div className="border-t border-dashed border-white/13 ">
      <Container>
        <div className="text-white  p-10 py-20 border-r border-l border-dashed border-white/13">
          <div className="flex justify-center items-center pb-8 gap-4">
            <span className="w-10 h-[1px]  bg-gradient-to-r from-transparent to-white"></span>
            <h3 className=" text-center text-text01 font-medium">Skills & Experience</h3>
            <span className="w-10 h-[1px] bg-gradient-to-r from-white to-transparent"></span>
          </div>

          <div className="bg-[#1c1c1c] flex gap-4 flex-wrap justify-center p-8 w-full rounded-md">

            <h4 className="px-4 py-2 bg-black rounded-md text-text01 font-medium text-sm ">HTML</h4>
            <h4 className="px-4 py-2 bg-black rounded-md text-text01 font-medium text-sm ">CSS</h4>
            <h4 className="px-4 py-2 bg-black rounded-md text-text01 font-medium text-sm ">Tailwind CSS</h4>
            <h4 className="px-4 py-2 bg-black rounded-md text-text01 font-medium text-sm ">React</h4>
            <h4 className="px-4 py-2 bg-black rounded-md text-text01 font-medium text-sm ">Redux</h4>
            <h4 className="px-4 py-2 bg-black rounded-md text-text01 font-medium text-sm ">Git</h4>
            <h4 className="px-4 py-2 bg-black rounded-md text-text01 font-medium text-sm ">Framer Motion</h4>
            <h4 className="px-4 py-2 bg-black rounded-md text-text01 font-medium text-sm ">Typescript</h4>

          </div>
        </div>
      </Container>
    </div>
  );
}

export default Part6;
