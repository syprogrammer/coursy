import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const user = useSelector((store) => store.userState.user);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <nav className="flex justify-between p-4 items-center shadow-xl">
      {/* -------logo---------- */}
      <div className="logo">
        <Link to="/">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt="Udemy"
            loading="lazy"
            className="w-20"
          />
        </Link>
      </div>

      {/* -------search container-------  */}

      <div className="serach-container hidden lg:inline-block">
        <form
          className="border w-[40vw] px-2 rounded-xl flex "
          onSubmit={handleSubmit}
        >
          <div>
            <input type="text" className="grow  p-2 outline-none w-[36vw] " />
          </div>
          <button className="grow-0 w-20">
            <img src="/search.svg" className="w-6" />
          </button>
        </form>
      </div>

      {/* ----------menu------  */}
      <div className="flex justify-end gap-5">
        <Link
          to="/dashboard"
          className="bg-black text-white py-1 px-2 rounded-md"
        >
          Dashboard
        </Link>
        {user?.email? (
          <span className="text-lg">😑 {user?.email?.slice(0,2)}</span>
        ) : (
          <Link
            to="/signin"
            className="bg-black text-white py-1 px-2 rounded-md"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
