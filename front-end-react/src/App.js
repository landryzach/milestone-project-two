import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
// Components
import Home from "./components/Home";
import MyList from "./components/MyList";
import AddMovie from "./components/AddMovie";
import EditMovie from "./components/EditMovie";
// CSS
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<MyList />} />
      <Route path="/add" element={<AddMovie />} />
      <Route path="/edit" element={<EditMovie />} />
    </Routes>
  );
}

export default App;
