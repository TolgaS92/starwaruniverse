import Navbar from '../Navbar';
import People from '../People';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/starwaruniverse">
          <People />
        </Route>
      </div>
    </Router>
  );
}

export default App;
