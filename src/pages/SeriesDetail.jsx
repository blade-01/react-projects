import { useParams } from "react-router";
import Btn from "../components/Ui/Btn";
import { useEffect, useState } from "react";
import Details from "../components/Media/Details";

export default function SeriesDetail() {
  const { id } = useParams();
  const [data] = useState({
    id: "1234",
    poster:
      "https://image.tmdb.org/t/p/original//6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
    title: "Sonic the Hedgehog",
    subTitle: "Welcome to the next level.",
    synopsis:
      "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
    rating: 3.8,
    year: 2025,
    type: "series",
    genres: ["Action", "Adventure", "Family", "Comedy"],
    casts: [
      "Ben Schwartz",
      "James Marsden",
      "Tika Sumpter",
      "Colleen O'Shaughnessey",
      "Idris Elba",
      "Jim Carrey",
      "Natasha Rothwell",
      "Adam Pally",
      "Shemar Moore",
      "Lee Majdoub",
      "Melody Nosipho Niemann",
      "Tom Butler",
      "Brad Kalilimoku",
      "Krista Alvarez",
      "Donna Jay Fulks",
      "Scott Patey",
      "Leif Havdale",
      "Johnson Phan",
      "Colby Chartrand",
      "Kevin Fortin",
      "Jeff Sanca",
      "Sook Hexamer",
      "Maria Ameerali",
      "Kyle Riefsnyder",
      "Parker Rowell-Laferriere",
      "Tammy Nera",
      "Gerald Paetz",
      "Corry Glass",
      "David Jacox",
      "Mike Mitchell",
      "Heath Stevenson",
      "Doug Chapman",
      "Rhys Williams",
      "Nilo Ghajar",
      "Don Lew",
      "Elizabeth Bowen",
      "Vladimir Ruzich",
      "Shay Kuebler",
      "Keiran Bohay",
      "Kevin Mylrea",
      "Jared Khalifa",
      "Aiden Cass",
      "Andrew Kyrzyk",
      "Stanislav Galimkhanov",
      "Shaun Magee",
      "Alex Bogomolov",
      "Shawn Stewart",
      "Barry Nerling",
      "Simon Chin",
      "Vladimir Raiman",
      "Yvetta Fisher",
      "Adrian Hein",
      "Jess Lundgren",
      "Steve Chang",
      "Ted Barba",
      "Brennan Dyson",
      "Saida Dyson",
      "Katie Wright Pere",
      "Ha'a Keaulana",
      "Quinn Early",
      "Cheryl Lewis",
      "Angela Meryl",
      "Ashlei Tave",
      "Mariah Dyson",
      "Tavita Woodard",
      "Ernie Jackson",
      "Rob 'Sluggo' Boyce",
      "Robert Zen Humpage",
      "Fraser Corbett",
      "Marcus Aurelio",
      "Jason Triplett",
      "Eli Olson",
      "Mike Rufino",
      "Nito Larioza",
      "Chad Keaulana",
      "Sarah Surh",
      "Paul Lazenby"
    ]
  });
  useEffect(() => {
    console.log("mounted", id);
  }, [id]);
  return (
    <div>
      <Btn />
      <Details data={data} />
    </div>
  );
}
