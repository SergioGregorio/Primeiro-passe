import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloatButton from "./components/WhatsAppFloatButton";
import Home from "./pages/Home";
import AthleteProfile from "./pages/AthleteProfile";
import Assessment from "./pages/Assessment";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atleta/:slug" element={<AthleteProfile />} />
            <Route path="/orcamento" element={<Assessment />} />
            <Route path="/sobre" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloatButton />
      </div>
    </BrowserRouter>
  );
}
