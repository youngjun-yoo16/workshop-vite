import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useParams } from "react-router-dom";
import DemoPage from './pages/demoPage.jsx'
import BenPage from './pages/benPage.jsx';
import JunPage from './pages/JunPage.jsx';
import PrathamPage from './pages/prathamPage.jsx';
import './index.css'
import Home from './Home.jsx'
import Example from './pages/example.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/example' element={<Example />} />
        <Route path='/demo' element={<DemoPage />} />
        <Route path='/profile/:name' element={<ProfileRouter />} />
      </Routes>
    </Router>
  </StrictMode>,
)

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
    case "Person4":
      return <DemoPage />;
    case "Pratham":
      return <PrathamPage />;
    case "Person6":
      return <DemoPage />;
    case "Person7":
      return <DemoPage />;
    case "Person8":
        return <DemoPage />;
    case "Person9":
      return <DemoPage />;
    case "Person10":
      return <DemoPage />;
    default:
      return <div>Profile not found</div>;
  }
}