import { useParams } from "react-router";
import Btn from "../components/Ui/Btn";

export default function MovieDetail() {
  const { id } = useParams();
  return (
    <div>
      <Btn />
      <br />
      {id}
    </div>
  );
}
