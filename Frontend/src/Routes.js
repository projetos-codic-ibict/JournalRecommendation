import React from "react"
import { BrowserRouter, Route, Redirect } from "react-router-dom"

import { useAuth0 } from "@auth0/auth0-react"

import Appointment from "./pages/Appointment"
import Home from "./pages/Home"
// import Profile from "./pages/Profile"

function Routes() {
  const { isAuthenticated } = useAuth0()
  return (
    <BrowserRouter>
      <Route
        path="/"
        exact
        render={() => (isAuthenticated ? (
          <Redirect to={{ pathname: "/profile" }} />
        ) : (
          <Home />
        ))}
      />
      {/* <Route path="/profile" component={Profile} /> */}
      <Route path="/search" component={Appointment} />
    </BrowserRouter>
  )
}

export default Routes
