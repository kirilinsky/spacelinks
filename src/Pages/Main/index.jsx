import React, { useState } from "react";
import "./style.scss";
import Tilt from "react-parallax-tilt";
import { useHistory } from "react-router-dom";

const planets = [
  {
    id: 0,
    name: "mars",
    title: "bio",
    path: "/bio",
  },

  {
    id: 2,
    name: "jupiter",

    title: "skills",
    path: "/skills",
  },
  {
    id: 3,
    name: "saturn",
    title: "projects",
    path: "/projects",
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
      {planets.map((planet, index) => (
        <div
          key={planet.id}
          onClick={() => goTo(planet)}
          className={`planet ${willTransform === planet.id ? "trf" : ""} ${
            planet.name
          }`}
        >
          <Tilt tiltReverse>
            <div className="planet-ico">
              <div
                className={` planet-ico-title ${index % 2 ? "" : "left-side"}`}
              >
                {planet.title}
              </div>
            </div>
          </Tilt>
        </div>
      ))}
    </main>
  );
};

export default Main;
