import React from "react";
import logo1 from "../assets/templogo.png";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// import { logout, reset } from "../features/auth/authSlice";

const Navbar = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);

//   const onLogout = () => {
//     dispatch(logout());
//     dispatch(reset());
//     navigate("/");
//   };
  return (
    <div className="">
      <header className="w-full top-0 z-[1000] flex justify-between items-center h-20 px-8 bg-gray-950 border-b-2 border-blue-500">
        <div className="logo text-[30px] inline-flex text-center">
          <img className="w-12 h-12 rounded-full mr-2" src={logo1} alt="" />
          <h3 className="text-white font-bold">
            <span className="text-blue-400">Script </span>Sensei
          </h3>
        </div>
        <div className="profile">
          <ul className="flex gap-4 text-center">
            <div className="rounded-full px-3 py-2 bg-slate-600">
            <i className="ri-user-fill text-blue-500 text-2xl"></i>
            </div>
            {/* {user ? (
              <li className="hover:text-purple-400">
                <button className="btn" onClick={onLogout}>
                <i className="ri-login-box-fill text-purple-500 text-2xl"></i> Logout
                </button>
              </li>
            ) : (
              <>
                <li className="hover:text-purple-400">
                  <Link to="/login">
                  <i className="ri-login-box-fill text-purple-500 text-2xl"></i> Login
                  </Link>
                </li>
                <li className="hover:text-purple-400">
                  <Link to="/register">
                  <i className="ri-user-fill text-purple-500 text-2xl"></i> Register
                  </Link>
                </li>
              </>
            )} */}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
