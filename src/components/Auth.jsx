import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import createNewUser from "../utils/signup";
import SigninUser from "../utils/signin";
import { useDispatch } from "react-redux";
import { closeLoginPopup } from "../redux/slices/setting";

const Auth = () => {
  const [isSignin, SetIsSignin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isSignin) {
        const user = await createNewUser(email, password);
        // console.log(user);
        if (user.uid) {
          dispatch(closeLoginPopup());
        }
      } else {
        const user = await SigninUser(email, password);
        // console.log(user);
        if (user.uid) {
          dispatch(closeLoginPopup());
        }
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return (
    <section className="bg-gray-50 lg:w-1/2 mx-auto rounded-md  lg:py-0">
      <button
        onClick={() => dispatch(closeLoginPopup())}
        className="bg-orange-500  text-white px-2 py-1 rounded-sm text-sm"
      >
        Go to Home
      </button>
      <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* -------logo---------- */}
        <div className="logo my-5">
          <Link to="/">
            <div className="text-xl font-bold">
              Cou<span className="text-orange-500">rsy</span>
            </div>
          </Link>
        </div>
        <div className="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {!isSignin ? "Sign up" : "Sign in to"} your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  minLength="4"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  minLength="8"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              {isSignin && (
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Forgot password?
                  </div>
                </div>
              )}
              <p className="text-rose-500">{error}</p>
              <button
                type="submit"
                className="w-full text-white bg-orange-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {!isSignin ? "Sign Up" : "Sign In"}
              </button>
              <p className="text-sm  text-gray-700 ">
                {!isSignin ? "Have an account yet?" : "Don't have an account?"}
                <span
                  onClick={() => SetIsSignin(!isSignin)}
                  className="px-2 font-bold text-orange-700 hover:underline "
                >
                  {!isSignin ? "Sign In" : "Sign Up"}
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
