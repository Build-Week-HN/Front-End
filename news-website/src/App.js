import React from "react";
import Register from "../src/components/Forms/Register";
import { Route, Link } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import Sidedrawer from "./components/Sidedrawer/Sidedrawer";
import Backdrop from "./components/Backdrop/Backdrop";

function App() {
  const [drawer, setDrawer] = React.useState(false);
  const toggleButton = () => {
    setDrawer(!drawer);
  };
  return (
    <div style={{ height: "100%" }}>
      <Toolbar toggleButton={toggleButton} />
      {drawer ? <Backdrop toggleButton={toggleButton} /> : null}
      {drawer ? <Sidedrawer toggleButton={toggleButton} /> : null}
      <main style={{ marginTop: "160px" }}>
        <Route exact path ="/register" component={Register}/>
        
        <p>This is the page content</p>
      </main>
    </div>
  );
}

export default App;
