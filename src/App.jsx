import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Description from "./pages/Description";
import Dashboard from "./pages/Dashboard";
import Error from "./components/Error";
import Offline from "./components/Offline";
import useOnlineStatus from "./hooks/useOnlineStatus";
import { useSelector } from "react-redux";
import useAuth from "./hooks/useAuth";
import Auth from "./pages/Auth";
import AdminHome from "./pages/admin/AdminHome";
import NewCourse from "./pages/admin/NewCourse";

const App = () => {
  const auth = useAuth();
  const isOnline = useOnlineStatus();
  const user = useSelector((store) => store.userState.user);
  const loginPopup = useSelector((store) => store.settings.loginPopup);

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return (
        <div>
          <Auth />
        </div>
      );
    }

    return children;
  };

  //app struct
  const AppLayout = () => {
    return (
      <div className="">
        <div className="h-[10vh]">
          <Navbar />
        </div>
        <div className="min-h-screen px-5 md:px-10 py-5">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  //Router configuration
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/auth",
          element: <Auth />,
        },
        {
          path: "/admin",
          element: <AdminHome/>,
        },
        {
          path: "/admin/newcourse",
          element: <NewCourse/>,
        },
        {
          path: "/description/:id",
          element: <Description />,
        },
        {
          path: "/dashboard",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default App;
