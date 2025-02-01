import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children:[
        {
          index:true,
          element: <Home/>
        }
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
