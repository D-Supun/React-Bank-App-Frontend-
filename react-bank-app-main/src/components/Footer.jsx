import { footerLinks } from "../utils";
import { SiGithub, SiLinkedin, SiUpwork, SiFreelancer } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

const SocialMedia = ({ icon, name, link }) => {
  return (
    <a href={link} className="relative social-icon">
      <span className="social-media-icon mt-8 ss:mt-0 p-3 xs:py-4 xs:px-4 ss:px-[1.03rem] text-black block rounded-full z-2 ss:absolute top-1/2 left-0 -translate-y-1/2">
        {icon}
      </span>
      <span className="hidden ss:block social-name text-base font-[500] capitalize bg-white text-black rounded-full transition-all py-[0.9rem] px-[1.6rem] hover:px-16 cursor-pointer z-1 overflow-hidden">
        {name}
      </span>
    </a>
  );
};

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="relative font-poppins pb-10 sm:pb-16 border-t border-secondary/10 mt-20 pt-10">
      <div className="flex items-start md:flex-row flex-col gap-10 md:gap-24">
        <div className="md:max-w-[370px]">
          <h2 className="text-3xl font-bold text-gradient tracking-widest uppercase">Bank Of Lanka</h2>
          <p className="text-dimWhite leading-relaxed text-base ss:text-lg mt-5">
            The next generation of banking is here. Secure, reliable, and built for the future of Sri Lanka.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between md:flex-row flex-col gap-5 pt-10 mt-10">
        <p className="text-dimWhite md:text-base text-sm">
          Copyright Ⓒ {date} <span className="text-secondary font-semibold">Bank Of Lanka</span>. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          {/* Social Icons could go here */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
