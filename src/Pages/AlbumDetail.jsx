import { useParams } from "react-router-dom";
import Slide from "../Components/Slide";
import "../album-detail.css"; // import custom CSS

import img1 from '../assets/tabletennislive_08/img1.jpg';
import img2 from '../assets/tabletennislive_08/img2.jpg';
import img3 from '../assets/tabletennislive_08/3.jpg';
import img4 from '../assets/tabletennislive_08/4.jpg';
import img5 from '../assets/tabletennislive_08/5.jpg';
import img6 from '../assets/tabletennislive_08/6.jpg';

const albumSlides = {
  1: [
    { imgSrc: img1, title: "", text: "" },
    { imgSrc: img2, title: "", text: "" },
    { imgSrc: img3, title: "", text: "" },
    { imgSrc: img4, title: "", text: "" },
    { imgSrc: img5, title: "", text: "" },
    { imgSrc: img6, title: "", text: "" },
  ],
};

export function AlbumDetail() {
  const { id } = useParams();
  const slides = albumSlides[id] || [];

  return (
    <main className="content">
      <Slide slides={slides} className="album-slider" />
    </main>
  );
}
