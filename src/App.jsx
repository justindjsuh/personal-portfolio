import "./App.css";
import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import LandingPage from "./pages/LandingPage";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Intro />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
