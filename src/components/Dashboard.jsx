import React, { useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Dialog from "./Modal";

export const Dashboard = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const { firstName, lastName, gender } = useSelector(
    (state) => state.userDtls
  );
  const fullName = firstName + " " + lastName;

  return (
    <Container>
      <Row>
        <div className="intro">
          <div className="pull-left">
            <h4>Welcome to dashboard</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore veritatis molestias maiores blanditiis fugit, ipsam, vel
              minus eos tempora illum praesentium quam amet maxime ratione
              corrupti rerum, esse quod ea.
            </p>
          </div>
          <div className="pull-right">
            <Button
              variant="primary"
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                window.location.reload();
              }}
            >
              Logout
            </Button>
          </div>
        </div>
        <div className="user">
          <h4>Full name : {fullName}</h4>
          <h4>Gender : {gender && gender}</h4>
        </div>
        <div className="dialog">
          <Button variant="primary" onClick={handleShow}>
            Open user details
          </Button>
          <Dialog show={show} setShow={setShow} />
        </div>
      </Row>
    </Container>
  );
};
