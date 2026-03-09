import { FcMenu } from "react-icons/fc";
import { navLinks } from "../utils/index";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="mb-5 md:mb-10 fixed top-0 left-0 w-full z-[100] glassmorphism">
      <div className="container px-5 md:px-10 mx-auto relative font-poppins flex items-center justify-between py-6">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold tracking-wider text-gradient">
            BANK OF LANKA
          </h2>
        </div>

        {/* Navigation */}
        <div>
          <ul
            className={`${
              menu ? "flex" : "hidden"
            } sm:flex items-center sm:gap-10 gap-8 capitalize absolute sm:relative top-[80px] right-0 sm:top-0 glassmorphism sm:bg-transparent z-50 sm:flex-row flex-col rounded-xl p-8 sm:p-0 w-full xs:w-72 sm:w-auto justify-center transition-all duration-300`}
          >
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="font-[500] text-dimWhite hover:text-secondary transition-colors duration-300"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <FcMenu
            className="sm:hidden block cursor-pointer text-3xl"
            onClick={() => setMenu(!menu)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;