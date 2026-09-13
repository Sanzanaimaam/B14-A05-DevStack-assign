import fotLog from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-16 w-full border-t border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-304 px-6 pb-12 pt-16 sm:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-[2.2fr_1fr_1fr_1fr]">
          {/* Logo and description */}
          <div className="col-span-2 md:col-span-1">
            <img
              src={fotLog}
              alt="Dev Stack"
              className="h-auto w-33.75 object-contain"
            />

            <p className="mt-4 max-w-107.5 text-[13px] leading-4.75 text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-6 flex items-center gap-5">
              <span className="text-[13px] font-medium text-gray-700">
                GitHub
              </span>
              <span className="text-[13px] font-medium text-gray-700">
                Twitter
              </span>
              <span className="text-[13px] font-medium text-gray-700">
                LinkedIn
              </span>
            </div>
          </div>

          {/* Product column */}
          <div>
            <h3 className="text-xs font-semibold uppercase text-gray-900">
              Product
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-[13px] leading-4.5 text-gray-500">Home</li>
              <li className="text-[13px] leading-4.5 text-gray-500">Technologies</li>
              <li className="text-[13px] leading-4.5 text-gray-500">Projects</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase text-gray-900">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-[13px] leading-4.5 text-gray-500">About</li>
              <li className="text-[13px] leading-4.5 text-gray-500">Contact</li>
              <li className="text-[13px] leading-4.5 text-gray-500">Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase text-gray-900">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-[13px] leading-4.5 text-gray-500">Privacy Policy</li>
              <li className="text-[13px] leading-4.5 text-gray-500">Terms of Service</li>
            </ul>
          </div>
        </div>

      
        <div className="mt-14 flex flex-col gap-4 border-t border-gray-200 pt-8 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;