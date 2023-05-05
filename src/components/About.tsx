import ThreeBoxCanvas from "./ThreeBox";

const About = () => {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center">
      <div className="w-full h-[20%] md:w-1/3 md:h-full">
        <ThreeBoxCanvas />
      </div>
      <div className="w-full md:w-2/3 md:h-full bg-black p-10 flex flex-col">
        <div className="h-1/3 md:text-8xl text-6xl font-bold text-stone-200 p-5 flex items-start">
          <h1>my story</h1>
        </div>
        <div className="w-full h-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 md:text-2xl text-l font-bold text-stone-200 p-5 flex items-start">
            <p>
              Originally a southerner, I have migrated north and currently live
              in Sheffield with my fiancee, Sarah and two boys, Gabriel and
              Oliver. Providing for my family and being a good role model to the
              boys is a big motivator for me. I want a career I can be proud of
              and that gives a platform for us to experience life and grow
              without limitations.
            </p>
          </div>
          <div className="w-full md:w-1/3 md:text-2xl text-l font-bold text-stone-200 p-5 flex items-start">
            <p>
              I like to push myself to be the best I can. I am amiable, a
              logical thinker and really enjoy problem solving which have been
              key strengths throughout my career. I like to feel I'm progressing
              whether that's in a chosen sport or professionally and am prepared
              to step out of my comfort zone to test myself and grow.
            </p>
          </div>
          <div className="w-full md:w-1/3 md:text-2xl text-l font-bold text-stone-200 p-5 flex items-start">
            <p>
              Within touching distance of the Peak District (why I moved to
              Sheffield), when I'm not coding I can be found climbing, road or
              mountain biking. Sarah and I have both travelled the
              world for climbing and adventure. Two boys provide a little extra
              logistical consideration but we are instilling a sense of
              adventure and travel in them at every opportunity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
