import CourseCard from "../Components/CourseCard";
import courses from "../data/courses.json"; // ✅ import JSON
import "../coursecard.css";

export function Course() {
  return (
    <main className="content">
      <div className="courses-grid">
        {courses.map((course, idx) => (
          <CourseCard {...course} />
        ))}
      </div>
    </main>
  );
}
