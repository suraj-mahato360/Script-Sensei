import Advertise from "../assets/ads-img.svg"
 const About = ()=> {
  return (
    <div className="flex justify-evenly mt-40">
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          
          
        </div>
        <div className="hidden w-80 lg:col-span-5 lg:flex">
              <img
                src={Advertise}
                alt="Script Sensei"
              ></img>
            </div>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-xl italic font-bold tracking-tight text-white sm:text-4xl">
            Reach more people
          </h2>
          <p className="mt-6 text-lg  italic leading-8 text-gray-300">
            ScriptSensei is a powerful script generator website designed to
            assist both beginners and seasoned writers in crafting compelling
            scripts. With ScriptSensei, you can effortlessly generate scripts
            for various mediums, including films, TV shows, plays, and more. Our
            user-friendly interface and intuitive features make it easy to
            explore different genres, plot structures, and character development
            options.
          </p>
        </div>
    </div>
  );
}

export default About;