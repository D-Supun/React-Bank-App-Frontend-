import { BiLogoEbay, BiLogoVisa, BiLogoWix } from "react-icons/bi";
import { IoLogoDropbox, IoLogoPlaystation } from "react-icons/io";
import { TbBrandMeta, TbBrandHbo } from "react-icons/tb";
import CommonTitle from "./CommonTitle";
import CommonButton from "./CommonButton";

const ServiceCard = () => {
  return (
    <section className="font-poppins md:py-16 py-10">
      <div className="flex flex-col gap-10">
        <div className="brands-logo flex items-center sm:flex-nowrap flex-wrap w-full gap-10 text-6xl xs:text-7xl ss:text-8xl justify-center sm:text-[130px] text-dimWhite/30 cursor-pointer">
          <BiLogoEbay className="hover:text-secondary transition-all duration-300 transform hover:scale-110" />
          <TbBrandHbo className="hover:text-secondary transition-all duration-300 transform hover:scale-110" />
          <BiLogoVisa className="hover:text-secondary transition-all duration-300 transform hover:scale-110" />
          <TbBrandMeta className="hover:text-secondary transition-all duration-300 transform hover:scale-110" />
          <BiLogoWix className="hover:text-secondary transition-all duration-300 transform hover:scale-110" />
          <IoLogoDropbox className="hover:text-secondary transition-all duration-300 transform hover:scale-110" />
          <IoLogoPlaystation className="hover:text-secondary transition-all duration-300 transform hover:scale-110" />
        </div>

        <div className="flex sm:flex-row flex-col sm:gap-0 gap-10 sm:items-center justify-between w-full bg-black-gradient-2 rounded-3xl p-6 ss:px-10 ss:py-10 md:px-16 md:py-10 my-10 md:my-16 border border-secondary/10 shadow-2xl shadow-secondary/5 glassmorphism">
          <div>
            <CommonTitle title="Experience Next-Gen Banking Now!" />
            <p className="max-w-[470px] mt-4 sm:mt-8 text-dimWhite leading-relaxed">
              Accept payments worldwide and grow your wealth with Sri Lanka's most advanced digital banking platform.
            </p>
          </div>
          <div className="flex items-center">
            <CommonButton btnText="get started" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
