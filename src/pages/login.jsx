import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="container-Login">
      <div className="shadow rounded">
        <h1>Welcome to our website</h1>
        <Button onClick={() => loginWithRedirect()}>Click to login</Button>
      </div>
    </div>
  );
}

export default Login;
