import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Home />}></Route>)
  );
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer draggable={false} />
    </>
  );
}

export default App;
