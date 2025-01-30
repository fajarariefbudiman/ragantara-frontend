import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import Products from "pages/Products";
import ShoppingCart from "pages/ShoppingCart";
import Chat from "pages/Chat";
import Category from "pages/Category";
import Courts from "pages/Courts";
import About from "pages/About";
import Checkout from "pages/Checkout";
import AdminDashboard from "pages/auth/Dashboard";
import Schedule from "pages/Schedule";
import ProductDetail from "pages/Product";
import CustomerProfile from "pages/auth/Profile";
import CustomerAddresses from "pages/auth/Addresses";
import MyOrders from "pages/auth/Orders";
import BankCards from "pages/auth/Bank_Card";
import Players from "pages/Players";
import PlayerProfile from "pages/PlayerProfile";
import Teams from "pages/Teams";
import TeamProfile from "pages/TeamProfile";
import Rankings from "pages/Rankings";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/players"
          element={<Players />}
        />
        <Route
          path="/player-profile"
          element={<PlayerProfile />}
        />
        <Route 
          path="/teams"
          element={<Teams />}
        />
        <Route 
          path="/team-profile"
          element={<TeamProfile />}
        />
        <Route 
          path="/rankings"
          element={<Rankings />}
        />
        <Route
          path="/dashboard"
          element={<AdminDashboard />}
        />
        <Route
          path="/profile"
          element={<CustomerProfile />}
        />
        <Route
          path="/my-orders"
          element={<MyOrders />}
        />
        <Route
          path="/bank-card"
          element={<BankCards />}
        />
        <Route
          path="/addresses"
          element={<CustomerAddresses />}
        />

        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/products"
          element={<Products />}
        />
        <Route
          path="/cart"
          element={<ShoppingCart />}
        />
        <Route
          path="/checkout"
          element={<Checkout />}
        />
        <Route
          path="/chat"
          element={<Chat />}
        />
        <Route
          path="/category/:slug"
          element={<Category />}
        />
        <Route
          path="/product/:slug"
          element={<ProductDetail />}
        />
        <Route
          path="/courts"
          element={<Courts />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/schedule"
          element={<Schedule />}
        />
        <Route
          path="*"
          element={<h1>Page Not Found</h1>}
        />
      </Routes>
    </Router>
  );
}

export default App;
