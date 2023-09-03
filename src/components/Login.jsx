import React, { useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

export const Login = ({checkUserLogin}) => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  const loginHandler = () => {
    if (username === "test" && pwd === "1234") {
      localStorage.setItem("isLoggedIn", true);
      checkUserLogin();
    } else {
      alert("Please enter valid details");
    }
  };
  return (
    <Container>
      <Row>
        <div className="login mt-5">
          <Form.Control
            type="text"
            placeholder="User name"
            className="mb-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Control
            type="password"
            placeholder="Password"
            className="mb-3"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <Button variant="primary" onClick={loginHandler}>
            Login
          </Button>
        </div>
      </Row>
    </Container>
  );
};
