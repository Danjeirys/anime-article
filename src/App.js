
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './Pages/about'
import Suggestions from './components/Suggestions/suggestion';


function App() {
  return (
    <>
    <Router>
      <nav id = 'nav'>
                <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    
                    <li>
                      <Link to="/suggestions">Suggestions</Link>
                    </li>

                    <li>
                      <Link to="/fanart">Fanart</Link>
                    </li>
                </ul>
        </nav>
      <div className="App">

          <Routes>
            <Route path='/' element={<Homepage/> } />
            <Route path='/about' element={<About /> } /> 
            <Route path='/suggestions' element={<Suggestions/> } />
          </Routes>
        
      </div>
    </Router>
    </>
  );
}

export default App;
