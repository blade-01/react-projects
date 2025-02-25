import { BrowserRouter as Router, Routes, Route } from "react-router";
import { PrimeReactProvider } from "primereact/api";
import Sidebar from "./components/Navigation/Sidebar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Bookmarks from "./pages/Bookmarks";
import Search from "./pages/Search";
import MovieDetail from "./pages/MovieDetail";
import SeriesDetail from "./pages/SeriesDetail";

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <Sidebar />
        <div className="xl:ml-30 xl:mt-8 2xl:mt-10 p-4 2xl:mx-auto max-w-[1500px]">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/series/:id" element={<SeriesDetail />} />
          </Routes>
        </div>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
