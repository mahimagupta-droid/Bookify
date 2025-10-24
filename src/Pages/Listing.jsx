import { Form, Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useFirebase } from "../Context/Firebase";
export default function ListingPage() {
  const firebase = useFirebase();
  const [name, setName] = useState("");
  const [IsbnNo, setIsbnNo] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.handleCreateNewListing(name, author, genre, IsbnNo, price);
  };
  return (
    <>
      <div className="container mt-5">
        <h1>List Your Books Here!</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Book Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter book name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Author:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Author Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Group>

          <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Enter Genre
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        </InputGroup>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter ISBN No:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ISBN No"
              value={IsbnNo}
              onChange={(e) => setIsbnNo(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Price:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            {/* <Form.Check type="checkbox" label="Check me out" /> */}
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    </>
  );
}
