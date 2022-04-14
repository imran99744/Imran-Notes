import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./components/screens/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNotes from "./components/screens/MyNotes/MyNotes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ minHeight: "93vh" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/notes" element={<MyNotes />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
