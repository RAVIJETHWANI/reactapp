import React from "react"
import { NavLink } from "react-router-dom"

export default function Error() {
    return (
      <section className="error-page section">
        <div className="error-container">
          <h1>oops! it's a dead end</h1>
          <NavLink to="/" className="btn btn-primary">
            back home
          </NavLink>
        </div>
      </section>
    );
  }