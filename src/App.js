import NavBar from "component/navBar";
import Packify from "component/packify";
import React from "react";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Packify />
      </main>
    </React.Fragment>
  );
}

export default App;
