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
import Settings from "./pages/setting/Settings";
import Message from "./pages/message/Message";
import Notification from "./pages/notification/Notification";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
          <Route path="/" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route element={<RootLayout/>}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/message" element={<Message/>}/>
            <Route path="/notification" element={<Notification/>}/>
            <Route path="/settings" element={<Settings/>}/>
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
