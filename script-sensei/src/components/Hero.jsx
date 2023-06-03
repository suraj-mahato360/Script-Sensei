import Heroimg from "../assets/Hero-img.svg"
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div>
      <div>
        <section className="bg-white dark:bg-gray-900 h-[100vh]">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7 text-center">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              <span className="text-blue-400">Script </span> Sensei
              </h1>
              {/* <p className="max-w-2xl text-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Empowering Your Imagination!
              </p> */}
              <TypeAnimation
                sequence={[
                  'Empowering Your Imagination!', 
                  2000,
                  () => {
                    console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                  }
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{color:'grey',marginRight:'44px',fontSize:'24px'}}/>
              <h3 className=" h-32 px-8  text-white mt-4">
                By Leveraging the Power of AI, Empower your brand with impactful scripts that engage, inspire, and leave a lasting impression. 
                Say goodbye to the guesswork and elevate your advertising campaigns with ScriptSensei, your trusted partner in AI-driven ad script generation.
        </h3>
        <a href="#prompt" className="p-4 bg-blue-500 rounded-md text-white hover:bg-blue-700"><button>Get Started</button></a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src={Heroimg}
                alt="Script Sensei"
              ></img>
            </div>
          </div>
        </section>        
      </div>
    </div>
  );
};

export default Hero;
