import Slide from '../Components/Slide';
import img1 from '../assets/1/img1.jpg';
import img2 from '../assets/1/img2.jpg';
import img3 from '../assets/table_tennis.jpg';

export function Home() {
  const slides = [
    { imgSrc: img1, title: "Welcome to AI Sport Program", text: "NCKU" },
    { imgSrc: img2, title: "Welcome to AI Sport Program", text: "NCKU" },
    { imgSrc: img3, title: "Welcome to AI Sport Program", text: "NCKU" },
  ];

  return <Slide slides={slides} />;
}
