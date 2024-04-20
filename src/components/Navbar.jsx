
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Navbar = () => {

 
  const user = useSelector((store) => store.userState.user);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <nav className="fixed z-50 w-full bg-white flex justify-between p-4 items-center shadow-xl">
      {/* -------logo---------- */}

      <div className="logo">
        <Link to="/">
          <div className="text-xl font-bold">
            Cou<span className="text-orange-500">rsy</span>
          </div>
        </Link>
      </div>

      {/* -------search container-------  */}

      <div className="serach-container hidden lg:inline-block">
        <form
          className="border w-[40vw] px-2 rounded-xl flex "
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="text"
              placeholder="Enter Course name,instructor name..."
              className="grow  p-2 outline-none w-[36vw] "
            />
          </div>
          <button className="grow-0 w-20">
            <img src="/search.svg" className="w-6" />
          </button>
        </form>
      </div>

      {/* ----------menu------  */}
      <div className="flex justify-end items-center gap-5">
        {user?.email != "test55@gmail.com" && (
          <Link
            to="/dashboard"
            className="bg-orange-700 text-white py-2 px-2 rounded-md"
          >
            Dashboard
          </Link>
        )}

        {user?.email ? (
          user.email == "test55@gmail.com" ? (
            <Link
              to="/admin"
              className="bg-orange-700 text-white py-2 px-2 rounded-md"
            >
              Admin
            </Link>
          ) : (
            <img
              src="/useravatar.png"
              alt="logo"
              loading="lazy"
              className="w-10"
            />
          )
        ) : (
          <Link
            to="/auth"
            // onClick={() => dispatch(openLoginPopup())}
            className="bg-orange-700  text-white py-2 px-4 rounded-md"
          >
            Signin
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
