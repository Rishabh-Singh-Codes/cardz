import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import CardDetails from "./pages/CardDetails";
import Catalogue from "./pages/Catalogue";
import History from "./pages/History";
import Home from "./pages/Home";

function AppLayout() {
  return (
    <div className="bg-slate-500 h-screen w-screen flex">
      <div className="w-1/4 h-5/6 m-auto" style={{background: "linear-gradient(11.1deg, #1A2440 1.16%, #313C5C 100.88%)"}}>
        <Outlet />
      </div>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/card",
        element: <CardDetails />,
      },
      {
        path: "/catalogue",
        element: <Catalogue />,
      },
      {
        path: "/history",
        element: <History />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
