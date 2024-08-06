import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Landing from "./components/landing";
import Trade from "./components/trade";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/trade" element={<Trade />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
