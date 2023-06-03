const Prompt = () => {
  return (
    <form id="prompt" className="flex items-center  justify-center">
      <div className="">
        <div className="text-center">
          <textarea
            className="w-[49rem] h-[78px] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl"
            type="text"
            placeholder="key message or value proposition. eg. Experience spotless dishes in no time,"
          />
        </div>
        <div className="">
          <div className="grid p-20 text-white py-2 gap-8 grid-cols-2 mt-4">
            <div className="">
              <input
                placeholder="Product Name"
                type="text"
                className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl"
              />
            </div>
            <div className="text-white">
              <div>
                <input
                  placeholder="Product Description"
                  type="text"
                  className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl"
                />
              </div>
            </div>
            <div className="text-white">
              <div>
                <input
                  placeholder="Company Name"
                  type="text"
                  className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl"
                />
              </div>
            </div>
            <div className="text-white">
              <div>
                <input
                  placeholder="Audience"
                  type="text"
                  className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl"
                />
              </div>
            </div>
            <div className="text-white">
              <div>
                <input
                  placeholder="CTA(Call To Action)"
                  type="text"
                  className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl"
                />
              </div>
            </div>
            <div className="text-white">
              <div>
                <input
                  placeholder="Duration: 20s-60s"
                  type="number"
                  className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
            </div>
            <div className="text-white">
              <div class="group relative">
                <input
                  placeholder="Tone/style eg.serious, humorous, etc."
                  type="text"
                  className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl"
                />
                <button class=" text-white absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4">
                  <i class="ri-information-line"></i>
                </button>
                <span class="group-hover:opacity-70 transition-opacity bg-gray-500 px-1 text-sm text-gray-100 rounded-md absolute opacity-0 m-4 mx-auto">
                  Tooltip
                </span>
              </div>
            </div>
            <div className="text-white">
              <div class="group relative">
                <input
                  placeholder="Other(Optional) additional info"
                  type="text"
                  className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl"
                />
                <button class=" text-white absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4">
                  <i class="ri-information-line"></i>
                </button>
                <span class="hover:opacity-70 transition-opacity bg-gray-500 px-1 text-sm text-gray-100 rounded-md absolute opacity-0 m-4 mx-auto">
                  Tooltip
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <div className="text-white mt-2 bg-blue-500 rounded-md text-center hover:bg-blue-700">
            <button
              type="submit"
              className="inline-flex text-center items-center"
            >
              <h2 className="text-2xl p-3 px-5">Generate Script</h2>
            </button>
          </div>
          <div className="text-white mt-2 bg-blue-500 rounded-md text-center hover:bg-blue-700">
            <button
              type="submit"
              className="inline-flex text-center items-center"
            >
              <h2 className="text-2xl p-3 px-5">Generate Post</h2>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Prompt;
