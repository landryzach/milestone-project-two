import { useState } from "react";

const ListItem = ({ props }) => {
  const [view, setView] = useState(false);

  const simpleView = () => {
    return (
      <div className="movie-simple" key={props.i}>
        <h2>{props.title}</h2>
      </div>
    );
  };
  const detailedView = () => {
    return (
      <div className="item-container">
        <div className="top-info">
          <div className="left">
            <img
              className="image"
              src={`http://via.placeholder.com/350x500`}
              alt={`${props.title} cover`}
              height={"350px"}
            />
          </div>
          <div className="right">
            <div className="right-info">
              <h2 className="title">{props.title}</h2>
              <h4 className="release-info">{props.date_released}</h4>
              <h4 className="genre">{props.genre}</h4>
              <h4 className="length">{props.duration}</h4>
              <h3 className="tagline">
                {props.tagline !== ""
                  ? props.tagline
                  : "This movie does not have a tagline."}
              </h3>
            </div>
            <div className="item-buttons">
              <button className="edit-movie">edit</button>
              <button className="delete-movie">delete</button>
            </div>
          </div>
        </div>
        <h3 className="overview">{props.description}</h3>
      </div>
    );
  };
  return (
    <div className="view-container" onClick={() => setView(!view)}>
      {view ? detailedView() : simpleView()}
    </div>
  );
};

export default ListItem;
