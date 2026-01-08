import Card from 'react-bootstrap/Card';

function AlbumCard({imgSrc, title, text}) {
  return (
    <Card className="album-card" style={{ width: '100%' }}>
      <Card.Img 
        variant="top" 
        src={imgSrc} 
        style={{ 
          height: '200px', 
          objectFit: 'cover' 
        }} 
      />
      <Card.Body className="text-center">
        <Card.Title style={{ fontSize: '15px' }}>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AlbumCard;