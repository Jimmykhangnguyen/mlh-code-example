import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Map from "./Map.jsx"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"
            element={<Map />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
