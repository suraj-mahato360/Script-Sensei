import { useState } from "react";
import Displayop from "./Displayop";

const Prompt = () => {
  const [formData, setFormData] = useState({
    key_value: "",
    product_name: "",
    product_desc: "",
    company_name: "",
    audience: "",
    cta: "",
    duration: "",
    tone: "",
    other: "",
  });
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({formData
        //   key_value: formData.key_value,
        //   product_name: formData.product_name,
        //   product_desc: formData.product_desc,
        //   company_name: formData.company_name,
        //   audience: formData.audience,
        //   cta: formData.cta,
        //   duration: formData.duration,
        //   tone: formData.tone,
        //   other: formData.other,
        }),
      });
      console.log(formData);
      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setFormData("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      console.log(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <form
        id="prompt"
        className="flex items-center  justify-center"
        onSubmit={onSubmit}
      >
        <div className="">
          <div className="text-center">
            <textarea
              className="w-[49rem] h-[78px] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl"
              type="text"
              name="key_value"
              placeholder="key message or value proposition. eg. Experience spotless dishes in no time,"
              onChange={(e) =>
                setFormData({ ...formData, key_value: e.target.value })
              }
              value={formData.key_value}
            />
          </div>
          <div className="">
            <div className="grid p-20 text-white py-2 gap-8 grid-cols-2 mt-4">
              <div className="">
                <input
                  placeholder="Product Name"
                  type="text"
                  name="product_name"
                  className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl"
                  onChange={(e) =>
                    setFormData({ ...formData, product_name: e.target.value })
                  }
                  value={formData.product_name}
                />
              </div>
              <div className="text-white">
                <div>
                  <input
                    placeholder="Product Description"
                    type="text"
                    name="product_desc"
                    className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl"
                    onChange={(e) =>
                      setFormData({ ...formData, product_desc: e.target.value })
                    }
                    value={formData.product_desc}
                  />
                </div>
              </div>
              <div className="text-white">
                <div>
                  <input
                    placeholder="Company Name"
                    type="text"
                    name="company_name"
                    className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl"
                    onChange={(e) =>
                      setFormData({ ...formData, company_name: e.target.value })
                    }
                    value={formData.company_name}
                  />
                </div>
              </div>
              <div className="text-white">
                <div>
                  <input
                    placeholder="Audience"
                    type="text"
                    name="audience"
                    className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl"
                    onChange={(e) =>
                      setFormData({ ...formData, audience: e.target.value })
                    }
                    value={formData.audience}
                  />
                </div>
              </div>
              <div className="text-white">
                <div>
                  <input
                    placeholder="CTA(Call To Action)"
                    type="text"
                    name="cta"
                    className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl"
                    onChange={(e) =>
                      setFormData({ ...formData, cta: e.target.value })
                    }
                    value={formData.cta}
                  />
                </div>
              </div>
              <div className="text-white">
                <div>
                  <input
                    placeholder="Duration: 20s-60s"
                    type="number"
                    name="duration"
                    className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    onChange={(e) =>
                      setFormData({ ...formData, duration: e.target.value })
                    }
                    value={formData.duration}
                  />
                </div>
              </div>
              <div className="text-white">
                <div className="group relative">
                  <input
                    placeholder="Tone/style eg.serious, humorous, etc."
                    type="text"
                    name="tone"
                    className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl"
                    onChange={(e) =>
                      setFormData({ ...formData, tone: e.target.value })
                    }
                    value={formData.tone}
                  />
                  <button className=" text-white absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4">
                    <i className="ri-information-line"></i>
                  </button>
                  <span className="group-hover:opacity-70 transition-opacity bg-gray-500 px-1 text-sm text-gray-100 rounded-md absolute opacity-0 m-4 mx-auto">
                    Tooltip
                  </span>
                </div>
              </div>
              <div className="text-white">
                <div className="group relative">
                  <input
                    placeholder="Other(Optional) additional info"
                    type="text"
                    name="other"
                    className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl"
                    onChange={(e) =>
                      setFormData({ ...formData, other: e.target.value })
                    }
                    value={formData.other}
                  />
                  <button className=" text-white absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4">
                    <i className="ri-information-line"></i>
                  </button>
                  <span className="hover:opacity-70 transition-opacity bg-gray-500 px-1 text-sm text-gray-100 rounded-md absolute opacity-0 m-4 mx-auto">
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
                //   onClick={onSubmit}
              >
                <h2 className="text-2xl p-3 px-5">Generate Script</h2>
              </button>
            </div>
            {/* <div className="text-white mt-2 bg-blue-500 rounded-md text-center hover:bg-blue-700">
            <button
              type="submit"
              className="inline-flex text-center items-center"
            >
              <h2 className="text-2xl p-3 px-5">Generate Post</h2>
            </button>
          </div> */}
          </div>
        </div>
      </form>
      <div>
        <Displayop result={result} />
      </div>
    </div>
  );
};

export default Prompt;
