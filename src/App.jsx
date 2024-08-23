import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">Contact App</div>
      </nav>
      <ContactForm/>
    </div>
  );
};

export default App;
