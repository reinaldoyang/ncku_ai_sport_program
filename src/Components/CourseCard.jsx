import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../coursecard.css'
function CourseCard({title, text, buttonText, buttonLink}) {
  return (
    <Card className="course-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary" href={buttonLink} style={{ backgroundColor: '#f7a01d', borderColor: '#f7a01d' }}>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}


export default CourseCard;