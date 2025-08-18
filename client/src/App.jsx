import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ImageGen from "./pages/ImageGen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/imagegen" element={<ImageGen />} />
      </Routes>
    </Router>
  );
}

export default App;
