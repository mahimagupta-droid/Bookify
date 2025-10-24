import { useEffect, useState } from "react";
import { useFirebase } from "../Context/Firebase";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const firebase = useFirebase();
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.loginUserWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    if(firebase.isLoggedIn){
        //navigate to home page
        navigate("/")
    }
  }, [firebase, navigate])
  return (
    <>
      <div className="container mt-5">
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <h1 className="mt-5 mb-5">OR</h1>
        <button variant="danger" onClick={firebase.loginWithGoogle}>Sign In With Google</button>
      </div>
    </>
  );
}
