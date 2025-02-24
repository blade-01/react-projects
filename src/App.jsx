import { BrowserRouter as Router, Routes, Route } from "react-router";
import Sidebar from "./components/Navigation/Sidebar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Bookmarks from "./pages/Bookmarks";

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="md:ml-30 md:mt-10 p-4 2xl:mx-auto max-w-[1500px]">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
