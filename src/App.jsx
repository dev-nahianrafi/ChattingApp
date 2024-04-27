import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import Error from "./pages/Error/Error";
import RootLayout from "./components/Layout/RootLayout";
import Home from "./pages/Home/Home";
import Registration from "./pages/auth/Registration";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
          <Route path="/" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route element={<RootLayout/>}>
            <Route path="/home" element={<Home/>}/>
          </Route>
            <Route path="*" element={<Error/>}/>
        </Route>
    )
  );

  return (
    <RouterProvider
    router={router}
  />
  )
}

export default App
