import Home from "./Page/Home";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
       <div className=" overflow-hidden">
       <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
      
    </div>
    </Router>
  );
}

export default App;
