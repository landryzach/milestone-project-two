import NavBar from "./NavBar";
import ListItem from "./ListItem";
import { useState } from "react";

const MyList = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const data = await fetch(`/movie`);
    const jsonData = await data.json();
    console.log(jsonData);
    setMovies(jsonData);
  };

  return (
    <>
      <button onClick={fetchData}>fetch</button>
      <NavBar />
      <ListItem />
    </>
  );
};

export default MyList;
