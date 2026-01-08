import Image from "next/image";
import { Button, Card } from "react-bootstrap";
import { RestaurantDTO } from "../page";
import Link from "next/link";

type RestCardProps = {
    Restraunt : RestaurantDTO
    
    
}
export default function RestCard(props:RestCardProps) {
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.Restraunt.name}</Card.Title>
        <Card.Text>
          {props.Restraunt.description}
          {/* {props.Restraunt.Cuisine} */}
        </Card.Text>
        <Button variant="primary">
          <Link href={`/Restaurant/${props.Restraunt.id}`} className="text-black nav-link">{props.Restraunt.name}</Link>
        </Button>
      </Card.Body>
    </Card>
    );
}
