/** @format */

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/destinations' element={<Destinations />} />
      <Route path='/crew' element={<Crew />} />
      <Route path='/technology' element={<Technology />} />
    </Routes>
  );
};

export default App;
