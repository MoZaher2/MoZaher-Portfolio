import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import {
  Navbar,
  Hero,
  Tech,
  Works,
  Experience,
  Contact,
  About,
  ScrollToTop,
} from "./components";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Works />
        <Tech />
        <Experience />

        <div className="relative z-0">
          <Contact />

          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </div>

        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;