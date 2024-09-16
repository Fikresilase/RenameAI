import { Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Direction from "./components/direction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Routes>
          {/* Home route */}
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <Hero />
                <Benefits />
                <Pricing />
                <Footer />
              </>
            } 
          />

          {/* Route for the Direction component */}
          <Route path="/direction" element={<Direction />} />
        </Routes>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
