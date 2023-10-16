import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./loginPage.css";
import { getUsers } from "../../actions/userDataProvider";


export default function LoginPage() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [errorMessage, setErrorMessage] = useState("");
 const navigate = useNavigate();
 const [users, setUsers] = useState([]);

 useEffect(() => {
   getUsers()
     .then((data) => setUsers(data))
     .catch((error) => console.error(error));
 }, []);

 const handleLogin = (event) => {
   event.preventDefault();

   const user = users.find(
     (user) => user.username === username && user.password === password
   );

   if (user) {
     localStorage.setItem("isLoggedIn", true);
     navigate("/");
   } else {
     setErrorMessage("Invalid username or password. Please try again.");
   }
 };


  return (
    <div className="body-loginPage">
      <div className="card-login">
        <h2>Sign In</h2>
        <Form onSubmit={handleLogin} className="formLogin">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="title-form">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="title-form">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {errorMessage && <p className="text-danger">{errorMessage}</p>}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
