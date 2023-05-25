import MatrixRain from "./Matrixrain";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Hero = () => {
  const openInNewTab = (url:any) => {
    window.open(url, "_blank", "noreferrer")
  };
  return (
    <div id="main" >
      <div className='relative h-screen w-screen snap-y snap-mandatory overflow-auto'>
        <MatrixRain />
        <div className="h-full w-full absolute top-0 left-0 flex flex-col justify-center">
          <div className="min-w-max mx-auto flex flex-col justify-center items-start">
            <h1 className="text-5xl md:text-9xl  pl-4 font-bold text-white">
              i'm nick hughes
            </h1>
            <h2 className="text-xl md:text-5xl pt-4 pl-4 font-bold text-white">
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
            <AiOutlineGithub onClick={()=>openInNewTab('https://github.com/Mrbusy13')} className="cursor-pointer hover:scale-110" size={40} />
            <AiOutlineLinkedin onClick={()=>openInNewTab('https://www.linkedin.com/in/nick-hughes-7a5a428b/')} className="cursor-pointer hover:scale-110" size={40} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
