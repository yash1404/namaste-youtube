import React from "react";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <React.Fragment>
      <Head />
      <RouterProvider router={appRouter} />
    </React.Fragment>
  );
}

export default App;
