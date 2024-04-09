import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.js";
import Attendancelist from "./AttendanceList.js";
import HomePage from "./HomePage.js";
import LoginPage from "./LoginPage.js";

const App = () => {
  return (
    <>
      <div id="grid">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/attend",
        element: <Attendancelist />,
      },
      {
        path: "/loginPage",
        element: <LoginPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
