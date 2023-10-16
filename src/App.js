import "./App.css";
import DashBoard from "./components/dashboard";
import { Route, Routes } from "react-router-dom";
import Product from "./components/product";
import Customers from "./components/customers";
import Income from "./components/income";
import Promote from "./components/promote";
import Help from "./components/help";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/customer" element={<Customers />} />
        <Route path="/income" element={<Income />} />
        <Route path="/promote" element={<Promote />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
