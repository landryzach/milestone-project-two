import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MyList from "./components/MyList";

// CSS
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<MyList />} />
    </Routes>
    // <div className="App">
    //   <NavBar />
    // </div>
  );
}

export default App;
