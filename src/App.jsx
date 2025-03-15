import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Maths from './pages/Maths';
import Science from './pages/Science';
import Gk from './pages/Gk';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maths" element={<Maths />} />
          <Route path="/science" element={<Science />} />
          <Route path="/gk" element={<Gk />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
