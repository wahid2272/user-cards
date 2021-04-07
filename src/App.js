import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";


function App() {
  return (
    <>
      <Router>
        <>
          <CssBaseline />
          <div className="appBody">
            <Navbar />
          </div>
        </>
      </Router>
    </>
  );
}

export default App;
