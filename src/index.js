import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Portfolio from "./Pages/Portfolio";
import Shinchan from "./Pages/Shinchan";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/Shinchan" element={<Shinchan />} />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
