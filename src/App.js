import Home from "./pages/home";
import Map from "./pages/map";
import Success from "./pages/success";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Contact} from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="map" element={<Map/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="success" element={<Success/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
