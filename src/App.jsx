import "./App.css";
import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import LandingPage from "./pages/LandingPage";

function App() {
  // const navigate = useNavigate  const handleStart = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
