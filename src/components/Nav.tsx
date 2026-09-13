
import navLogo from "../assets/logo-text.png";
const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex justify-between max-w-7xl mx-auto items-center py-10 px-4">
        <img src={navLogo} alt="Logo" />

        <ul className="flex justify-between gap-5 text-gray-400 font-medium">
          <li className="text-[#D91B7E]">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex items-center gap-3">
          <button className="px-5 py-2 text-[#D91B7E] font-medium hover:bg-gray-100 transition duration-200 rounded-full">
            Sign In
          </button>

          <button className="px-5 py-2 bg-[#D91B7E] text-white font-medium hover:bg-orange-500 transition duration-200 shadow-sm rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
