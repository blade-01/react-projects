import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Header title="Welcome back, Blade 👋🏼" />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
