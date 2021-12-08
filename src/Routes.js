import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Spinner } from "react-bootstrap";

const List = React.lazy(() => import("./pages/list"));
const Login = React.lazy(() => import("./pages/login"));
const PageNotFound = React.lazy(() => import("./pages/404"));

export default function RoutesComponent() {
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    <Suspense fallback="loading...">
      {!isLoading ? (
        <Routes>
          <Route exact path="/" element={isAuthenticated?<List />:<Login/>} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      ) : (
        <div>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </Suspense>
  );
}
