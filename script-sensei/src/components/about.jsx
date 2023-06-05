import Advertise from "../assets/ads-img.svg";
const About = () => {
  return (
    <div className="flex justify-evenly mt-40 items-center lg:flex-wrap md:p-2">
      <div className="w-96 sm:w-80">
        <img src={Advertise} alt="Script Sensei"></img>
      </div>
      <div className="w-1/3 md:w-full md:text-center">
        <h2 className="text-xl italic font-bold tracking-tight text-white">
          What is Script Sensei ?
        </h2>
        <p className="mt-6 text-lg  italic leading-8 text-gray-300">
          ScriptSensei is a powerful script generator website designed to assist
          both beginners and seasoned writers in crafting compelling scripts.
          With ScriptSensei, you can effortlessly generate scripts for various
          mediums, including films, TV shows, plays, and more. Our user-friendly
          interface and intuitive features make it easy to explore different
          genres, plot structures, and character development options.
        </p>
      </div>
    </div>
  );
};

export default About;
