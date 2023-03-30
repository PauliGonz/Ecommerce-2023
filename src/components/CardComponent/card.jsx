//import './style.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardComponent=({name, price, img})=> {
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
               {price}
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      );
}
