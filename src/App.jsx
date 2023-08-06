import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { HomePage } from "./pages/HomePage";
import { BookingPage } from "./pages/BookingPage";
import { TourDetailPage } from "./pages/TourDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { OrdersPage } from "./pages/OrdersPage";
import { AddPackagePage } from "./pages/AddPackagePage";
import { NotFoundPage } from "./pages/NotFoundPage";

import { fetchHeader } from "./api";
import { fetchFooter } from "./api";

export function App() {
  const [header, setHeader] = useState([]);
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    fetchHeader().then(data => setHeader(data));
    fetchFooter().then(data => setFooter(data));
  }, []);


  return (
    <div className="App">
      <Header header={header} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking/:id" element={<TourDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/addPackage" element={<AddPackagePage />} />
        <Route path="/admin/orders" element={<OrdersPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer footer={footer} />
    </div>
  )
}