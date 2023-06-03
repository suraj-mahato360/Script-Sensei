import Heroimg from "../assets/Hero-img.svg"

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <img src={Heroimg} alt="Logo" className="h-14 w-14 rounded-md" />
        <h1 className="text-white font-bold text-2xl"><span className="text-blue-500">Script</span> Sensei</h1>
      </div>
      <div className="flex items-center">
        <div className="px-4 py-3 bg-slate-700 rounded-full">
      <i className="ri-user-fill text-2xl text-blue-500"></i>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
