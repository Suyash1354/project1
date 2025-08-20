import React from "react";
import Cards from "../Componets/Cards";

const Landing = () => {
  return (
    <section className="w-full  h-[calc(100vh-8vh)]">
      <div className="Main w-full h-full ">
        <div className="Heading relative z-50 h-full font-[Heading] lg:text-[16vw] center text-[22vw] pointer-events-none ">
          <h1>Pixio</h1>
        </div>

        { /*
        <div className="Cards w-full h-fit">
          <Cards />
        </div>
      */  }
      </div>
    </section>
  );
};

export default Landing;
