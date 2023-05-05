import MatrixRain from "./Matrixrain";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <div id="main" >
      <div className='relative h-screen w-full'>
        <MatrixRain />
        <div className="h-screen w-full absolute top-0 left-0 bg-white/10">
          <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
            <h1 className="sm:text-8xl text-6xl pl-4 font-bold text-white">
              i'm nick hughes
            </h1>
            <h2 className="sm:text-3xl text-2xl pt-4 pl-4 font-bold text-white">
              i'm a{" "}
              <TypeAnimation
                sequence={[
                  " full stack web developer",
                  2000,
                  " coder",
                  2000,
                  " tech enthusiast",
                  2000,
                  " climber",
                  2000,
                  " mountain biker",
                  2000,
                  " surfer",
                  2000,
                  " adventure sports enthusiast",
                  2000,
                  () => {
                    console.log("Sequence completed");
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "1em", display: "inline-block" }}
              />
            </h2>
          
          <div className="pt-6 text-white flex justify-around max-w-[200px] w-full">
            <AiOutlineGithub className="cursor-auto" size={40} />
            <AiOutlineLinkedin className="cursor-auto" size={40} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
