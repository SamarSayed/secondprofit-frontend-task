import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate()
  return (
      <div className="container-404">
        <div className="shadow rounded">
          <h1>404 Page not found</h1>
          <Button onClick={() => navigate("/")}>Go to home page</Button>
        </div>
      </div>
  );
}

export default Login;
