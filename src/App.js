import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode,setMode]  = useState('light');   // whether dark mode is enabled or not
  const [alert, setAlert]= useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 5000);
  }
  const toggleMode =()=>{
  if(mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor = '#2c3b4c';
  showAlert("Dark mode has been enabled","success");
  document.title = 'Cyber security downloading';

  // setInterval(() => {
  //   document.title = 'Cyber security downloading';
  // }, 2000);

  // setInterval(() => {
  //   document.title = 'Cyber security Installed';
  // }, 500);
}
else{
  setMode('light');
  document.body.style.backgroundColor = 'white';
  showAlert("light mode has been enabled","success");
}
}

return (
<>
{/* {<Navbar title="Hacker" aboutText="About Hacker"/>}
{<Navbar/>} */}
<Router>
<Navbar title="Cyber Security" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my.3">
<Routes>
  {/* /users --> Component 1
  /users/home --> Component 2 */}
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />

        </Routes>
{/* <About/> */}
</div>
</Router>
    </>
  );
}


export default App;
