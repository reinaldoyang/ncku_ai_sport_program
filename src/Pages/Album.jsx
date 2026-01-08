import AlbumCard from "../Components/AlbumCard";
import img1 from '../assets/1/img1.jpg';
import img2 from '../assets/認知科學_cover.png';
import img3 from '../assets/專項運動_cover.png';
import img4 from '../assets/4/1.png';
import img5 from '../assets/5/1.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const albums = [
  { id: 1, imgSrc: img1, title: "2025成大盃桌球錦標賽科技轉播", text: "8/8-8/11" },
  { id: 2, imgSrc: img2, title: "113認知科學原理運用於運動訓練之實務應用", text: "AI運動科技專長微學程" },
  { id: 3, imgSrc: img3, title: "113專項運動技戰術分析與應用", text: "AI運動科技專長微學程" },
  { id: 4, imgSrc: img4, title: "113競技運動與巨量數據", text: "AI運動科技專長微學程" },
  { id: 5, imgSrc: img5, title: "113肌力與體能訓練之科技應用與實務", text: "AI運動科技專長微學程" },
];

export function Album() {
  return (
    <main className="content">
      <Row xs={2} md={2} className="g-4">
        {albums.map(album => (
          <Col key={album.id}>
            <Link to={`/album/${album.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <AlbumCard {...album} />
            </Link>
          </Col>
        ))}
      </Row>
    </main>
  );
}
