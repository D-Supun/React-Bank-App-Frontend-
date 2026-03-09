import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex md:items-center flex-col md:flex-row gap-10 md:gap-0 pt-32"
    >
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-8 flex-1 pr-10 md:pr-0">

        {/* OFFER BADGE */}
        <div className="flex items-center gap-2 font-poppins bg-discount-gradient py-2 px-3 xs:px-5 text-lg rounded-xl w-[100%] xs:w-fit border border-secondary/20 shadow-lg shadow-secondary/5">
          <img src={discount} alt="offer" />
          <p className="sm:text-base text-xs text-dimWhite uppercase tracking-widest">
            20% <span className="text-secondary font-[600]">Special Bonus</span>{" "}
            For <span className="text-secondary font-[600]">New Users</span>
          </p>
        </div>

        {/* HEADING */}
        <div className="relative">
          <h1 className="text-[3.3rem] sm:text-6xl leading-snug sm:leading-normal md:text-7xl md:leading-snug font-extrabold font-poppins text-white uppercase tracking-tight">
            Next Gen <br className="md:block hidden" />{" "}
            <span className="text-gradient">Banking</span>{" "}
            <br className="md:block hidden " /> For{" "}
            Sri Lanka.
          </h1>

          <div className="absolute top-0 right-10 md:block hidden">
            <GetStarted />
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-base sm:text-lg md:text-xl text-dimWhite sm:mt-5 md:max-w-[500px] leading-relaxed">
          Manage your savings, transfer money, and pay bills securely with our
          next-generation digital banking platform. Premium, secure, and lightning fast.
        </p>
      </div>

      {/* RIGHT SIDE DECORATION */}
      <div className="flex-1 relative flex items-center justify-center min-h-[450px]">
        {/* Abstract Neon Elements */}
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="w-[300px] h-[300px] rounded-full bg-secondary/10 border border-secondary/20 shadow-[0_0_100px_rgba(0,242,255,0.2)] animate-pulse-slow flex justify-center items-center">
            <div className="w-[200px] h-[200px] rounded-full bg-secondary/5 border border-secondary/30 shadow-[0_0_50px_rgba(0,242,255,0.1)]"></div>
          </div>
          
          {/* Glass Card Mockup */}
          <div className="absolute w-[350px] h-[220px] glassmorphism rounded-2xl border border-white/20 rotate-[15deg] translate-x-10 -translate-y-10 shadow-2xl overflow-hidden group hover:rotate-0 transition-all duration-700">
            <div className="absolute top-5 left-5 w-12 h-8 bg-white/10 rounded-md"></div>
            <div className="absolute bottom-5 left-5 text-white/40 font-mono text-sm tracking-widest">**** **** **** 8854</div>
            <div className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-secondary/20 blur-xl"></div>
          </div>
          
          <div className="absolute w-[350px] h-[220px] glassmorphism rounded-2xl border border-white/10 -rotate-[10deg] -translate-x-10 translate-y-10 shadow-2xl">
             <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5"></div>
          </div>
        </div>

        <div className="absolute w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
        <div className="absolute w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>

        {/* MOBILE BUTTON */}
        <div className="absolute -top-4 left-5 sm:left-[60px] md:hidden z-10">
          <GetStarted />
        </div>
      </div>
    </section>
  );
};

export default Hero;