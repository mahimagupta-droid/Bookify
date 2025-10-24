import { Button, Card } from "react-bootstrap";
import {CardGroup} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BookCard({ books }) {
    const navigate = useNavigate()
  return (
    <div style={{ display: "flexbox", flexWrap: "wrap", gap: "20px" }}>
      <CardGroup style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px", // space between cards
        padding: "20px",}}>
        {books.map((bookDoc) => {
          const data = bookDoc.data();
          return (
            <Card
              key={bookDoc.id}
              style={{
                width: "18.5rem",
                margin: "5px",
                borderRadius: "10px"
              }}
            >
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>Author: {data.author}</Card.Text>
                <Card.Text>ISBN Number: {data.isbn}</Card.Text>
                <Card.Text>Price: {data.price}</Card.Text>
                <Card.Text>Genre: {data.genre}</Card.Text>
                <Card.Text>ISBN Number: {data.isbn}</Card.Text>
                <Card.Text>Sold By: {data.displayName}</Card.Text>
                <Button 
                    variant="danger"
                    onClick={() => navigate(`book/view/${bookDoc.id}`)}
                >
                    View
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </CardGroup>
    </div>
  );
}
