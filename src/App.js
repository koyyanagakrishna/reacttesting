import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./store/Store";
import { Row } from "react-bootstrap"

function App() {
  const [isAccess, setIsAccess] = useState(false);

  useEffect(() => {
    setIsAccess(localStorage.getItem("isLoggedIn") || false);
  }, [isAccess]);

  const checkUserLogin = () => {
    setIsAccess(localStorage.getItem("isLoggedIn") || false);
  };

  return (
    <Provider store={store}>
      <Container fluid>
        <Row>
          <p>learn react</p>
          {!isAccess ? (
            <Login checkUserLogin={checkUserLogin} />
          ) : (
            <Dashboard />
          )}
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
