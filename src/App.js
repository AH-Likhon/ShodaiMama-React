import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import RightFeed from './components/RightFeed/RightFeed';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="/" element={<RightFeed />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
