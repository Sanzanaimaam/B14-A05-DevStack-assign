import banner from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className="flex justify-between max-w-7xl mx-auto items-center py-10 px-4">
            <div className="w-1/2">
               <strong className="text-5xl font-extrabold">
               Build Your Ideal <br />
              <span className="bg-linear-to-r from-orange-500 to-[#D91B7E] bg-clip-text text-transparent">
                 Development Stack
               </span>
              </strong>

                <p className="mt-5 max-w-lg text-gray-600">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that
                    fits your <br />next project.
                </p>
                <div className="flex gap-3 mt-6">
    <button className="w-52 h-12 rounded-lg bg-linear-to-r from-orange-500 to-[#D91B7E] text-white font-semibold hover:opacity-90 transition">
        Explore Technologies
    </button>

    <button className="w-52 h-12 rounded-lg border border-gray-300 text-gray-500 font-semibold hover:bg-gray-100 transition">
        Learn More
    </button>
</div>
            </div>

            <div className="w-1/2 flex justify-center">
                <img src={banner} alt="" className="max-w-md" />
            </div>
        </div>
    );
};

export default Banner;
