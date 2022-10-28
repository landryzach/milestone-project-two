
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MyList from "./components/MyList";
import NewMovie from "./components/NewMovie";
import EditMovie from "./components/EditMovie";

// CSS
import "./App.css";



function App() {

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<MyList />} />
      <Route path="/new" element={<NewMovie />} />
      <Route path="/edit" element={<EditMovie />} />
    </Routes>
  );
}

export default App;
