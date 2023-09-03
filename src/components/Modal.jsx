import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userAction } from "./redux/actions/userAction";

function Dialog({ show, setShow }) {
  const [userDtls, setUserDtls] = useState({
    firstName: "",
    lastName: "",
    gender: "",
  });

  const { firstName, lastName, gender } = userDtls;
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (firstName && lastName && gender) {
      console.log({ firstName, lastName, gender });
      dispatch(userAction(userDtls));
      setUserDtls({
        firstName: "",
        lastName: "",
        gender: "",
      });
      setShow(false);
    } else {
      alert("Please provide required details");
    }
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="userDetails">
            <Form.Control
              type="text"
              placeholder="First name"
              className="mb-3"
              value={firstName}
              onChange={(e) =>
                setUserDtls((prevState) => ({
                  ...prevState,
                  firstName: e.target.value,
                }))
              }
            />
            <Form.Control
              type="text"
              placeholder="Last name"
              className="mb-3"
              value={lastName}
              onChange={(e) =>
                setUserDtls((prevState) => ({
                  ...prevState,
                  lastName: e.target.value,
                }))
              }
            />
            <Form.Select
              aria-label="Gender"
              value={gender}
              onChange={(e) => {
                setUserDtls((prevState) => ({
                  ...prevState,
                  gender: e.target.value,
                }));
              }}
            >
              <option>Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Form.Select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Dialog;
