import React from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import Sidedrawer from "./components/Sidedrawer/Sidedrawer";
import Backdrop from "./components/Backdrop/Backdrop";

function App() {
  // drawerToggleClickHandler = ()=>{
  //   setDrawer((drawer) => {
  //     return{setDrawer:!drawer

  //     }
  //   })
  // }
  return (
    <div style={{ height: "100%" }}>
      <Toolbar />
      <Backdrop />
      <Sidedrawer />
      <main style={{ marginTop: "160px" }}>
        <p>This is the page content</p>
      </main>
    </div>
  );
}

export default App;
