import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import DemoPage from "./pages/demoPage.jsx";
import BenPage from "./pages/BenPage.jsx";
import JunPage from "./pages/JunPage.jsx";
import PrathamPage from "./pages/prathamPage.jsx";
import SaumyaPage from "./pages/SaumyaPage.jsx";
import "./index.css";
import Home from "./Home.jsx";
import Example from "./pages/example.jsx";
import PartthPage from "./pages/PartthPage.jsx";
import DhanushriPage from "./pages/DhanushriPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/profile/:name" element={<ProfileRouter />} />
        <Route path="/profile/:saumya" element={<saumyaPage />} />
      </Routes>
    </Router>
  </StrictMode>
);

function ProfileRouter() {
  const { name } = useParams();

  switch (name) {
    case "Ryan(Demo)":
      return <DemoPage />;

    // Change <DemoPage /> to your custom profile page, and change the case to your name
    case "Jun":
      return <JunPage />;
    case "Person2":
      return <DemoPage />;
    case "Ben":
      return <BenPage />;
    case "Saumya":
      return <SaumyaPage />;
    case "Pratham":
      return <PrathamPage />;
    case "Person6":
      return <DemoPage />;
    case "Person7":
      return <DemoPage />;
    case "Partth":
      return <PartthPage />;
    case "Person9":
      return <DemoPage />;
    case "Dhanushri":
      return <DhanushriPage />;
    default:
      return <div>Profile not found</div>;
  }
}
