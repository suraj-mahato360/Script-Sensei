import Heroimg from "../assets/Hero-img.svg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 h-[100vh] flex items-center md:h-full">
        <div>
          <div className="flex px-4 py-8 text-left justify-evenly items-center mb-14 md:flex-wrap-reverse md:py-2 md:mb-2">
            <div className="w-[37%] h-full md:text-center md:w-full md:p-2">
              <h1 className="mb-4 text-4xl font-extrabold leading-none dark:text-white">
                <span className="text-blue-400">Script </span> Sensei
              </h1>
              <TypeAnimation
                sequence={[
                  "Empowering Your Imagination!",
                  2000,
                  () => {
                    console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ color: "grey", fontSize: "24px" }}
              />
              <h3 className=" h-32  text-white mt-4 md:mt-2 md:h-full">
                By Leveraging the Power of AI, Empower your brand with impactful
                scripts that engage, inspire, and leave a lasting impression.
                Say goodbye to the guesswork and elevate your advertising
                campaigns with ScriptSensei, your trusted partner in AI-driven
                ad script generation.
              </h3>
              <a
                href="#prompt"
                
              >
                <button className="p-4 bg-blue-500 rounded-md text-white mt-2 hover:bg-blue-700">Get Started</button>
              </a>

            </div>
            <div className="">
              <img className="" src={Heroimg} alt="Script Sensei"></img>
            </div>
          </div>
          <div className="text-center md:hidden">
            <a
              href="#prompt"
              className=""
            >
              <i className="ri-arrow-down-circle-fill text-5xl text-blue-600 bottom-0 animate-bounce absolute"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
