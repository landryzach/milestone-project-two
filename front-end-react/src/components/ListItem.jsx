import cover from "../assets/images/cover.webp";

const ListItem = () => {
  return (
    <div className="item-container">
      <div className="top-info">
        <div className="left">
          <img
            className="image"
            src={cover}
            alt="test movie cover"
            height={"250px"}
          />
        </div>
        <div className="right">
          <h2 className="title">Jurassic World Dominion</h2>
          <h3 className="release-date">2022-10-14</h3>
          <h3 className="length">111 minutes</h3>
          <button className="add-movie">add</button>
        </div>
      </div>
      <h4 className="overview">
        Four years after her last encounter with masked killer Michael Myers,
        Laurie Strode is living with her granddaughter and trying to finish her
        memoir. Myers hasn't been seen since, and Laurie finally decides to
        liberate herself from rage and fear and embrace life. However, when a
        young man stands accused of murdering a boy that he was babysitting, it
        ignites a cascade of violence and terror that forces Laurie to confront
        the evil she can't control.
      </h4>
    </div>
  );
};

export default ListItem;
