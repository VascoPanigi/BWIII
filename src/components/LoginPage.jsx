import { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { SET_USER_LOGGED, TOGGLE_IS_LOGGED } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const PlaintextExample = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitDispatch = (id) => {
    dispatch({ type: TOGGLE_IS_LOGGED, payload: true });
    dispatch({ type: SET_USER_LOGGED, payload: id });
    navigate(`/user/${id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "ciao@ciao.it" && password === "ciao") {
      const id = "6642750c55621a0015c15faa";
      console.log(id);
      submitDispatch(id);
      // dispatch({ type: TOGGLE_IS_LOGGED, payload: true });
      // dispatch({ type: SET_USER_LOGGED, payload: id });
      // navigate(`/user/${id}`);
    }
    if (email === "francesco@ciao.it" && password === "francesco") {
      const id = "664317a555621a0015c15fce";
      console.log(id);
      submitDispatch(id);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Button type="submit">LOGIN</Button>
    </Form>
  );
};

export default PlaintextExample;
