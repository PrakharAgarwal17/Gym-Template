import Home from "./components/Home";
import JoinUs from "./components/JoinUs";
import Programs from "./components/Programs";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>

      {/* FIXED NAVBAR */}
      <Navbar />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Home />
              </section>

              <section id="joinUs">
                <JoinUs />
              </section>

              <section id="programs">
                <Programs />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="contact">
                <Contact />
              </section>

              <section id="footer">
                <Footer />
              </section>
            </>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;