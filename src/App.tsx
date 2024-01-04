import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// import CardDetails from "./pages/CardDetails";
// import Catalogue from "./pages/Catalogue";
// import History from "./pages/History";
import Home from "./pages/Home";
import Splash from "./pages/Splash";

const CardDetails = lazy(() => import("./pages/CardDetails"));
const Catalogue = lazy(() => import("./pages/Catalogue"));
const History = lazy(() => import("./pages/History"));

function AppLayout() {
  return (
    <div className="bg-slate-500 h-screen w-screen flex overflow-hidden">
      <div className="w-full h-full md:w-1/4 md:h-5/6 m-auto" style={{background: "linear-gradient(11.1deg, #1A2440 1.16%, #313C5C 100.88%)"}}>
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
        // element: <CardDetails />,
        element: (
          <Suspense fallback={<Splash />}>
            <CardDetails />
          </Suspense>
        ),
      },
      {
        path: "/catalogue",
        element: (
          <Suspense fallback={<Splash />}>
            <Catalogue />
          </Suspense>
        ),
      },
      {
        path: "/history",
        // element: <History />,
        element: (
          <Suspense fallback={<Splash />}>
            <History />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  // return  <BrowserRouter>
  // <RouterProvider router={appRouter} />;
  // </BrowserRouter>
  return <RouterProvider router={appRouter} />;
};

export default App;
