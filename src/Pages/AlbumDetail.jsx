import { useParams } from "react-router-dom";
import { albums } from "../data/albums";
import Slide from "../Components/Slide";
import "../album-detail.css";

export function AlbumDetail() {
  const { id } = useParams();
  const album = albums.find(a => a.id === id);

  if (!album) return <div>Album not found</div>;

  const loadImage = (name) =>
    new URL(`../assets/${album.id}/${name}`, import.meta.url).href;

  const renderContent = () => {
    // SLIDER
    if (album.type === "slider") {
      const slides = album.photos.map((name) => ({
        imgSrc: loadImage(name),
        title: "",
        text: "",
      }));
      return <Slide slides={slides} className="album-slider" />;
    }

    // GRID LAYOUT
    if (album.type === "grid") {
      const columns = album.columns || 3; // Default 3 columns if not specified
      return (
        <>
          {album.content && (
            <p className="album-content" style={{ whiteSpace: "pre-line", marginBottom: "20px" }}>
              {album.content}
            </p>
          )}
          <div 
            className="album-grid" 
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
          >
            {album.photos.map((name, index) => (
              <div key={index} className="album-grid-item">
                <img
                  src={loadImage(name)}
                  alt={`Photo ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </>
      );
    }

    // GALLERY (regular photos)
    if (album.type === "gallery") {
      return (
        <div className="gallery">
          {album.photos.map((name, index) => (
            <img
              key={index}
              src={loadImage(name)}
              className="gallery-photo"
              alt=""
            />
          ))}
        </div>
      );
    }

    // TEXT ONLY
    if (album.type === "text") {
      return <p style={{ whiteSpace: "pre-line" }}>{album.content}</p>;
    }
  };

  return (
    <main className="content">
      <h1 className="album-title">{album.title}</h1>
      {renderContent()}
    </main>
  );
}
