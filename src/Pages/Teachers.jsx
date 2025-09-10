import Teachers_card from "../Components/TeachersCard";
import teachers from "../data/teachers.json";
import "../teachers_card.css";
import {Link} from "react-router-dom"

export function Teachers() {
  return (
    <main className="content">
      <div className="teachers-grid">
        {teachers.map((teacher, idx) => {
          // Convert the image path from JSON to a proper URL
          const img = new URL(`../assets/${teacher.imgSrc}`, import.meta.url).href;
          return (
            <div className="teacher-card" key={idx}>
                <Teachers_card {...teacher} imgSrc={img} id={idx}/>
            </div>
          );
        })}
      </div>
    </main>
  );
}
