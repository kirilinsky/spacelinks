import React, { useState } from "react";
import "./style.scss";
import Tilt from "react-parallax-tilt";
import { useHistory } from "react-router-dom";

const planets = [
  {
    id: 0,
    name: "venus",
    path: "/bio",
  },
  {
    id: 1,
    name: "mars",
    path: "/skills",
  },
  {
    id: 2,
    name: "jupiter",
    path: "/projects",
  },
  {
    id: 3,
    name: "saturn",
    path: "/links",
  },
];
const Main = () => {
  const [willTransform, setWillTransform] = useState(null);
  const history = useHistory();

  const goTo = (planet) => {
    setWillTransform(planet.id);
    setTimeout(() => {
      history.push(planet.path);
    }, 1500);
  };
  return (
    <main className="main">
      {planets.map((planet) => (
        <div
          key={planet.id}
          onClick={() => goTo(planet)}
          className={`planet ${willTransform === planet.id ? "trf" : ""} ${
            planet.name
          }`}
        >
          <Tilt tiltReverse tiltAxis={"y"}>
            <div className="planet-ico"></div>
          </Tilt>
        </div>
      ))}
    </main>
  );
};

export default Main;
