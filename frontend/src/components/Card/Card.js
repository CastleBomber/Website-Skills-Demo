import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import useSound from "use-sound";
import mySong from "./Songs/LaBouche-BeMyLover-Hypatan.mp3";
import "./card.css";
import "./card-info.json";

function CardTileGroup({ tiles }) {
  const [playSound] = useSound(mySong);

  return (
    <CardGroup className="card-tile-group">
      <Card>
        <Card.Img variant="top" src={tiles[0].image} />
        <Card.Body>
          <Card.Title>{tiles[0].title}</Card.Title>
          <Card.Text>{tiles[0].text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            <Button href="/about" variant="danger" onClick={() => playSound()}>
              {tiles[0].smalltext}
            </Button>
          </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={tiles[1].image} />
        <Card.Body>
          <Card.Title>{tiles[1].title}</Card.Title>
          <Card.Text>{tiles[1].text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{tiles[1].smalltext}</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={tiles[2].image} />
        <Card.Body>
          <Card.Title>{tiles[2].title}</Card.Title>
          <Card.Text>{tiles[2].text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{tiles[2].smalltext}</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default CardTileGroup;
