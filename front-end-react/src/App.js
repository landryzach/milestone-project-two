import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './App.css';

function App() {

  return (
    <div className='App'>
      <Router>
        <header>
          <h1 className="title">Movie List!</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
