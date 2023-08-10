import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Landing from "./pages/Landing/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Serve from "./pages/Serve/Serve";
import Choose from "./pages/Choose/Choose";
import Approach from "./pages/Approach/Approach";
import Contact from "./pages/Contact";
import ScrollToTop from "./assets/Scroll";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./index.css";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen justify-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/our-approach" element={<Approach />} />
          {/* <Route path="/who-we-serve" element={<Serve />} /> */}
          <Route path="/why-choose-us" element={<Choose />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  </React.StrictMode>
);