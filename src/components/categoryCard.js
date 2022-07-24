import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function categoryCard(category) {
  return (
    category && (
    <a href={`category/${category.id}`}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{category.attributes?.name}</Card.Title>
        <Card.Text>
          {category.attributes?.description}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </a>
    )
  );
}

export default categoryCard;