import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import '../teachers_card.css';
import {Link} from "react-router-dom";

function Teachers_card({id, imgSrc, title, text, buttonText}) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img className="teacher-card-img" variant="top" src={imgSrc} />
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button
          as={Link}                // 👈 use React Router Link
          to={`/teachers/${id}`}   // 👈 match your route
          variant="primary"
          style={{ backgroundColor: '#f7a01d', borderColor: '#f7a01d' }}
        >
          Learn More
        </Button>
      </Card.Body>
    </Card>
  );
}


export default Teachers_card;