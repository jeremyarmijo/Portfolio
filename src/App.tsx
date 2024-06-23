import Project from './scenes/Project/scene'
import Home from "./scenes/Home/Home";
import Education from './scenes/Education/scene'
// import About from "./scenes/About/scene"
// import Contact from './scenes/Contact/scene'
import './index.css'
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="*" element={<Navigate to="/" />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/education" element={<Education />}/>
            {/* <Route path="/contact" element={<Contact />}/> */}
            <Route path="/project" element={<Project />}/>
            {/* <Route path="/about" element={<About />}/> */}
          </Routes>
      </Router>
    </>
  )
}

export default App
