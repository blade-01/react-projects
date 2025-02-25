import Search from "../components/Ui/Input/Search";
import Card from "../components/Media/Card";
import Trending from "../components/Media/Trending";

export default function Home() {
  const items = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div>
      <Search />
      <div className="mb-10">
        <h1 className="text-white font-light text-xl md:text-3xl pb-5">
          Trending
        </h1>
        <div className="flex gap-5 md:gap-7 w-full overflow-auto no-scrollbar relative">
          {items.map((item) => (
            <Trending
              key={item}
              data={{
                poster:
                  "https://image.tmdb.org/t/p/original//xuLA0pii2IMJW2puT7EvJtgpg0H.jpg",
                title: "Sonic Hedgehog",
                year: 2025,
                type: "movie"
              }}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-white font-light text-xl md:text-3xl pb-5">
          Popular
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7">
          {items.map((item) => (
            <Card
              key={item}
              data={{
                poster:
                  "https://image.tmdb.org/t/p/original//xuLA0pii2IMJW2puT7EvJtgpg0H.jpg",
                title: "Sonic Hedgehog",
                year: 2025,
                type: "movie"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
