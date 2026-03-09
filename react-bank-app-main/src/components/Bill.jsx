import { appstore, bill, playstore } from "../assets";
import CommonTitle from "./CommonTitle";

const Bill = () => {
  return (
    <section className="relative font-poppins py-10 sm:py-16">
      <div className="flex flex-col md:flex-row gap-10 md:gap-5">
        <div className="flex-1 relative">
          <img
            src={bill}
            alt="bill"
            className="w-full h-full object-contain md:object-fill relative z-[5] drop-shadow-[0_0_30px_rgba(0,242,255,0.2)]"
          />
          <div className="absolute w-[80%] h-[80%] -left-1/2 top-0 white__gradient rounded-full z-[0] opacity-10"></div>
        </div>

        <div className="flex flex-col gap-5 md:gap-10 flex-1">
          <CommonTitle title="Easily control your billing & invoicing" />
          <p className="text-dimWhite leading-relaxed text-base ss:text-lg">
            Manage your financial operations with lightning speed. Track every invoice, generate reports instantly, and automate your billing process with Bank Of Lanka's next-gen tools.
          </p>
          <p className="text-secondary mt-5 text-base ss:text-lg font-semibold tracking-wide uppercase">
            Speed is luxury. Get it in the bank sooner.
          </p>
          <div className="flex items-center gap-5">
            <img src={appstore} alt="app store" />
            <img src={playstore} alt="play store" />
          </div>
        </div>
      </div>
      <div className="absolute w-[20%] h-[60%] rounded-full left-0 top-20 pink__gradient"></div>
    </section>
  );
};

export default Bill;
