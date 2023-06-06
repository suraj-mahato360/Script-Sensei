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
  const [result, setResult] = useState("");
  const [ loading, setLoading] = useState(false)

  
  // Function to generate output using OpenAI API
  // console.log(formData);
  const generateOutput = async (e) => {
      setLoading(true)
    const prompt = `As an experienced script writer, generate a compelling advertisement script and post for a ${formData.duration} seconds ad promoting ${formData.company_name} by ${formData.product_name}. The target audience is ${formData.audience}. Focus on the key message or value proposition: ${formData.key_value}. Highlight the following features: ${formData.product_desc}. Maintain a ${formData.tone} tone that aligns with ${formData.company_name}'s brand identity. End the script with a strong call-to-action (CTA) prompting viewers to ${formData.cta} ${formData.other}, and also write post for all the social media platform(s) from above information.`;
    console.log(prompt)
    e.preventDefault();
    const option = {
      method: "POST",
      body: JSON.stringify({
        message: prompt,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch("http://localhost:8000/generate", option);
      // console.log(response);
      const data = await response.json();
      setResult(data.choices[0].message.content);
      console.log(data);
      
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
        setLoading(false)
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  // useEffect(()=>{

  // }[result])

  return (
    <div id="prompt" className="flex items-center flex-col h-full md:h-full">
      <div className="text-center text-4xl text-white mb-8 font-mono mt-10">
        <h2>Advertisement Details</h2>
      </div>
      <form  className="flex items-center justify-center" onSubmit={generateOutput}>
        <div className="">
          <div className="text-center">
            <textarea
              className="w-[49rem] h-[78px] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl sm:w-[22rem] "
              type="text"
              name="key_value"
              placeholder="key message or value proposition. eg. Experience spotless dishes in no time"
              onChange={(e) => setFormData({...formData, key_value: e.target.value })}
              value={formData.key_value}
              required
            />
          </div>
          <div className="">
            <div className="grid p-20 text-white py-2 gap-8 grid-cols-2 mt-4 md:grid-cols-1 md:p-2">
              <div className="">
                <input
                  placeholder="Product Name"
                  type="text"
                  name="product_name"
                  className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl"
                  onChange={(e) =>
                    setFormData({...formData, product_name: e.target.value })
                  }
                  required
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
                      setFormData({...formData, product_desc: e.target.value })
                    }
                    required
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
                      setFormData({...formData, company_name: e.target.value })
                    }
                    required
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
                    onChange={(e) => setFormData({...formData, audience: e.target.value })}
                    value={formData.audience}
                    required
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
                    onChange={(e) => setFormData({...formData, cta: e.target.value })}
                    value={formData.cta}
                    required
                  />
                </div>
              </div>
              <div className="text-white">
                <div>
                  <input
                    placeholder="Duration: 20s-60s"
                    type="text"
                    name="duration"
                    className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl"
                    onChange={(e) => setFormData({...formData, duration: e.target.value })}
                    value={formData.duration}
                    required
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
                    onChange={(e) => setFormData({...formData, tone: e.target.value })}
                    value={formData.tone}
                    required
                  />
                </div>
              </div>
              <div className="text-white">
                <div className="group relative">
                  <input
                    placeholder="Other(Optional) additional info"
                    type="text"
                    name="other"
                    className="w-[22rem] p-[14px] text-white bg-slate-800 focus:border focus:border-blue-600 outline-0 border-[none] text-[18px] rounded-xl"
                    onChange={(e) => setFormData({...formData, other: e.target.value })}
                    value={formData.other}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <div className="text-white mt-2 bg-blue-500 rounded-md text-center hover:bg-blue-700">
              <button
                type="submit"
                className="inline-flex text-center items-center p-3"
              >
                Generate Script
              </button>
            </div>
          </div>
            <div className="flex justify-center mt-2">
              {loading?(
                <div className="text-center text-xl ">
                  <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
                </div>
              ):null}
              </div>
        </div>
      </form>
      <div>
        {result?(<Displayop result={result} />):null}
      </div>
    </div>
  );
};

export default Prompt;
