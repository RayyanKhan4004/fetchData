import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
const App =  createBrowserRouter([{
  path: '/',
  element: <Home />

},{
  path: '/about',
  element: <About/>
},{
  path: '/services',
  element: <Services/>
}

])
export default App;