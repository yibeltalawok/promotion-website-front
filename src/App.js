
import React from "react";
import { Router,Route, Routes} from "react-router-dom";
import Promotion from "./components/pages/promotion";
// import Promotion1 from "./components/pages/promotion1";
// import Vacancie from "./components/pages/vacancie";
import Manufacture from "./components/pages/manufacture";
import { Helmet } from 'react-helmet';

function App() {
  return (
<>


<Routes>
        <Route path="/" element={<Promotion/>}></Route>
        {/* <Route path="/T1" element={<Promotion1/>}></Route> */}
        {/* <Route path="/productCategory" element={ <Vacancie/> }></Route> */}
        <Route path="/org/:id" element={<Manufacture/>}></Route>
        {/* <Route path="/org1/:id" element={<Manufacture1/>}></Route> */}

        {/* <Route path="/org" element={<Manufacture/>}></Route> */}        
</Routes>
</>
  );}

export default App;
