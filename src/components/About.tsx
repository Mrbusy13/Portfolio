import ThreeBoxCanvas from "./ThreeBox";

const About = () => {
  return (
    <div id="about" className="min-h-screen w-screen bg-slate-500 flex flex-col">      
        <div className="text-6xl md:text-8xl font-bold text-gray-100 p-5">
          <h1>my story</h1>
        </div>
        <div className="w-full h-full flex flex-col flex-1 md:flex-row items-center justify-center">
        <div className="w-full md:w-1/3 min-h-min md:h-[700px]">
          <ThreeBoxCanvas />
        </div>
        <div className="w-full md:w-2/3 md:h-full p-10 flex flex-col">
          <div className="w-full flex flex-col md:flex-row gap-5">
            <div className="border-2 rounded-xl border-gray-100 shadow-xl w-full md:w-1/3 md:text-2xl text-l font-bold text-gray-100 p-5 flex items-start">
              <p>
                Originally a southerner, I have migrated north and currently
                live in Sheffield with my family. Providing for my family and being a good role model
                to the boys is a big motivator for me. I want a career I can be
                proud of and that gives a platform for us to experience life and
                grow without limitations.
              </p>
            </div>
            <div className="border-2 rounded-xl border-gray-100 shadow-xl w-full md:w-1/3 md:text-2xl text-l font-bold text-gray-100 p-5 flex items-start">
              <p>
                I like to push myself to be the best I can. I am personable, a
                logical thinker and really enjoy problem solving which have been
                key strengths throughout my career. I like to feel I'm
                progressing whether that's in a chosen sport or professionally
                and am prepared to step out of my comfort zone to test myself
                and grow.
              </p>
            </div>
            <div className="border-2 rounded-xl border-gray-100 shadow-xl w-full md:w-1/3 md:text-2xl text-l font-bold text-gray-100 p-5 flex items-start">
              <p>
                Within touching distance of the Peak District (why I moved to
                Sheffield), when I'm not coding I can be found climbing, road or
                mountain biking. Sarah and I have both travelled the world for
                climbing and adventure. Two boys provide a little extra
                logistical consideration but we are instilling a sense of
                adventure and travel in them at every opportunity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// via-purple-500
