import AlbumCard from "../Components/AlbumCard";
import img1 from '../assets/tabletennislive_08/img1.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const albums = [
  { id: 1, imgSrc: img1, title: "2025成大盃桌球錦標賽科技轉播", text: "8/8-8/11" },
];

export function Album() {
  return (
    <main className="content">
      <Row xs={1} md={2} className="g-4">
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
