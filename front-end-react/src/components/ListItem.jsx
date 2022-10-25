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
            height={"350px"}
          />
        </div>
        <div className="right">
          <div className="right-info">
            <h2 className="title">Jurassic World Dominion</h2>
            <h4 className="release-info">2022-10-14</h4>
            <h4 className="length">111 minutes</h4>
            <h3 className="tagline">
              Four years after the destruction of Isla Nublar, Biosyn operatives
              attempt to track down Maisie Lockwood, while Dr Ellie Sattler
              investigates a genetically engineered swarm of giant insects.
            </h3>
          </div>
          <div className="item-buttons">
            <button className="edit-movie">edit</button>
            <button className="delete-movie">delete</button>
          </div>
        </div>
      </div>
      <h3 className="overview">
        Four years after her last encounter with masked killer Michael Myers,
        Laurie Strode is living with her granddaughter and trying to finish her
        memoir. Myers hasn't been seen since, and Laurie finally decides to
        liberate herself from rage and fear and embrace life. However, when a
        young man stands accused of murdering a boy that he was babysitting, it
        ignites a cascade of violence and terror that forces Laurie to confront
        the evil she can't control.
      </h3>
    </div>
  );
};

export default ListItem;
