
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Registration from "./pages/Registration";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";


function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage /> } />
          <Route path="/registration" element={<Registration />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
