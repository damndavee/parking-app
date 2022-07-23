import React, { } from "react";
// import {useDispatch} from "react-redux";
import {Route, Routes} from "react-router-dom";

import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
// import CityDetails from "./components/CityDetails/CityDetails";
// import Navigation from "./pages/Navigation/Navigation";
// import { fetchCitiesStart } from "./store/city/city.action";

const App = () => {
  // const dispatch = useDispatch();
   
  // useEffect(() => {
  //   dispatch(fetchCitiesStart());
  // }, [])
        
  return (
    <React.Fragment>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="/cities/:city" element={<CityDetails />} /> */}
      </Routes>    
    </React.Fragment>
  )
}

export default App;