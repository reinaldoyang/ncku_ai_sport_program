import Card from 'react-bootstrap/Card';

function AlbumCard({imgSrc, title, text}) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AlbumCard;