import "./App.css";
import Hero from "./components/Hero";
import Review from "./components/Review";
import Service from "./components/Service";
import Contact from "./components/Contact";
import FillDetail from "./components/FillDetail";
import Success from "./components/Success";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./components/Start";
function App() {
  return (
    <>
      {/* <Hero />
      <Service />
      <Review />
      <Contact /> */}
      {/* <FillDetail /> */}
      {/* <Success /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/detail" element={<FillDetail />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
