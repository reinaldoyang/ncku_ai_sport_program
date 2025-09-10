import { useParams } from "react-router-dom";
import teachers from "../data/teachers.json";

export function TeacherDetail() {
  const { id } = useParams();
  const teacher = teachers[id]; // if you used idx, this works

  if (!teacher) return <h2>Teacher not found</h2>;

  const img = new URL(`../assets/${teacher.imgSrc}`, import.meta.url).href;

  return (
    <div className="teacher-detail text-center">
      <img src={img} alt={teacher.title} style={{ maxWidth: "300px" }} />
      <h2>{teacher.title}</h2>
      <p>{teacher.text}</p>
    </div>
  );
}
