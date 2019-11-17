import React from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import Sidedrawer from './components/Sidedrawer/Sidedrawer'
import Backdrop from './components/Backdrop/Backdrop'


function App() {
  const [drawer,setDrawer] = React.useState(false)

  // drawerToggleClickHandler = ()=>{
  //   setDrawer((drawer) => {
  //     return{setDrawer:!drawer

  //     }
  //   })
  // }
  return (
    <div style={{height:'100%'}}>
      <Toolbar/>
      {drawer? <Backdrop/>: null}
      {drawer? <Sidedrawer/> : null}
      <main style={{marginTop: '160px'}}>
      <p>This is the page content</p>
      </main>
      
      
    </div>
  );
}

export default App;
