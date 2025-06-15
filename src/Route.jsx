import { useRoutes } from "react-router-dom";
import Home from './Components/Home';
import AboutUsContent from "./Components/About";
import ContactUsContent  from "./Components/ContactUs";
import EditorialBoard from "./Components/Eboard";

const RoutesConfig = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path:"about", element:<AboutUsContent/>},
    { path:"contact",element:<ContactUsContent/>},
    {path:"Eboard",element:<EditorialBoard/>},
    
    

  ]);
};

export default RoutesConfig;

