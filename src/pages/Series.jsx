import Search from "../components/Ui/Input/Search";
import Card from "../components/Media/Card";

export default function Series() {
  const items = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div>
      <Search placeholder={"Search for TV series"} />
      <div>
        <h2 className="text-white font-light text-xl md:text-3xl pb-5">
          Series
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
                type: "series"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
