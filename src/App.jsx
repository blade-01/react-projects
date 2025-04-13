import { BrowserRouter as Router, Routes, Route } from "react-router";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-dark-blue/theme.css";
import Sidebar from "./components/Navigation/Sidebar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Tv from "./pages/Tv";
import Bookmarks from "./pages/Bookmarks";
import Search from "./pages/Search";
import MovieDetail from "./pages/MovieDetail";
import MovieList from "./pages/MovieList";
import TvList from "./pages/TvList";
import TvDetail from "./pages/TvDetail";

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <Sidebar />
        <div className="xl:mt-8 xl:ml-30 2xl:mt-10 p-4 w-full xl:w-[calc(100%-120px)]">
          <div className="xl:mx-auto xl:w-full xl:max-w-[1300px]">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/movie" element={<Movie />} />
              <Route path="/tv" element={<Tv />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/search" element={<Search />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
              <Route path="/movie/:type/list" element={<MovieList />} />
              <Route path="/tv/:id" element={<TvDetail />} />
              <Route path="/tv/:type/list" element={<TvList />} />
            </Routes>
          </div>
        </div>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
