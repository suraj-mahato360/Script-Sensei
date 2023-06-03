import React from "react";

const Prompt = () => {
  return (
    <form className="flex items-center  justify-center">
      <div className="">
        <div className="text-center">
          <textarea
            className="w-[49rem] h-[78px] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[22px] rounded-xl"
            type="text"
            placeholder="Idea of how you want the ad to be"
          />
        </div>
        <div className="flex text-white py-2 gap-8 ">
          <div>
            <input
              placeholder="Product Name"
              type="text"
              className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[22px] rounded-xl"
            />
            {/* <select
                className=" w-full p-[14px] bg-slate-800 outline-0 border-[none] text-[15px] rounded-[8px] mb-[10px]"
                name="genre"
                id="genre"
              >
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="suspence">Suspense</option>
                <option value="thriller">Thriller</option>
                <option value="romance">Romance</option>
                <option value="drama">Drama</option>
                <option value="scifi">Science Fiction</option>
                <option value="horror">Horror</option>
                <option value="mystery">Mystery</option>
                <option value="fantasy">Fantasy</option>
              </select> */}
          </div>
          <div className="text-white">
            <div>
              <input
                placeholder="Product Description"
                type="text"
                className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[22px] rounded-xl"
              />
            </div>
          </div>
          <div className="text-white">
            <div>
              <input
                placeholder="Audience"
                type="text"
                className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[22px] rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-white mt-2 bg-blue-500 rounded-md text-center hover:bg-blue-700">
            <button type="submit" className="inline-flex text-center items-center">
              <h2 className="text-2xl p-3 px-5">Generate</h2>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Prompt;
