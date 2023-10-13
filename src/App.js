import React from "react";

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Home from './Component/Home';
import BoshRepairService from './Component/Bosh-repair-service';
import SamsungRepairService from './Component/Samsung-repair-service';
import SiemensRepairService from './Component/Siemens-repair-service';
import IFBRepairService from './Component/IFB-repair-service';
import LGRepairService from './Component/LG-repair-service';
import WhirlpoolRepairService from './Component/Whirlpool-repair-service';
import PrivacyPolicy from './Component/PrivacyPolicy';
import ScrollToponLoad from "./Component/ScrollToponLoad";
import Thankyou from "./Component/Thankyou";

function App() {

  return (
    <>

<BrowserRouter>
<Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/BoshRepairService" element={<BoshRepairService/>}/>
 <Route path="/SamsungRepairService" element={<SamsungRepairService/>}/>
 <Route path="/SiemensRepairService" element={<SiemensRepairService/>}/>
 <Route path="/IFBRepairService" element={<IFBRepairService/>}/>
 <Route path="/LGRepairService" element={<LGRepairService/>}/>
 <Route path="/WhirlpoolRepairService" element={<WhirlpoolRepairService/>}/>
 <Route path="/Home/PrivacyPolicy" element={<PrivacyPolicy/>}/>
 <Route path="/Thankyou" element={<Thankyou/>}/>
 
</Routes>
<ScrollToponLoad/>
 
</BrowserRouter>
    </>

  );
}

export default App;
