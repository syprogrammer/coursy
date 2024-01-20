import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Description from "./pages/Description";
import Dashboard from "./pages/Dashboard";
import Error from "./components/Error";
import Offline from "./components/Offline";
import useOnlineStatus from "./hooks/useOnlineStatus";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useSelector } from "react-redux";
import useAuth from "./hooks/useAuth";
// exporting router
const App = () => {
  const auth = useAuth();
  const isOnline = useOnlineStatus();
  const user= useSelector((store) => store.userState.user);
  console.log("authenticated", user);

  if (!isOnline) {
    return <Offline />;
  }
  
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      console.log("not authenticated");
      return <Navigate to="/signin" />;
    }
    
    return children;
  };
  //app struct
  const AppLayout = () => {

    return (
      <div className="">       
        <Navbar />
 
        <div className="min-h-screen">
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
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/signin",
          element: <Login />,
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
