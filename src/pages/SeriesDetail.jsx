import { useParams } from "react-router";
import Btn from "../components/Ui/Btn";

export default function SeriesDetail() {
  const { id } = useParams();
  return (
    <div>
      <Btn />
      <br />
      {id}
    </div>
  );
}
