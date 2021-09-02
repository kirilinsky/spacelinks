import React from "react";
import SectionHeader from "../../components/SectionHeader";
import TagCloud from "react-tag-cloud";
import randomColor from "randomcolor";

import "./style.scss";

const tags = [
  { title: "react", fontSize: 43 },
  { title: "redux", fontSize: 39 },
  { title: "redux-saga", fontSize: 22 },
  { title: "redux-thunk", fontSize: 27 },
  { title: "node.js", fontSize: 38 },
  { title: "express", fontSize: 37 },
  { title: "koa", fontSize: 11 },
  { title: "mongoDB", fontSize: 27 },
  { title: "mongoose", fontSize: 30 },
  { title: "scss", fontSize: 42 },
  { title: "stylus", fontSize: 30 },
  { title: "HTTP", fontSize: 30 },
  { title: "axios", fontSize: 27 },
  { title: "web socket", fontSize: 15 },
  { title: "css grid", fontSize: 40 },
  { title: "telegram api", fontSize: 23 },
  { title: "google maps", fontSize: 21 },
  { title: "yandex maps", fontSize: 20 },
  { title: "lodash", fontSize: 25 },
  { title: "media queries", fontSize: 40 },
  { title: "webpack", fontSize: 37 },
  { title: "postCSS", fontSize: 29 },
  { title: "tailwind", fontSize: 32 },
  { title: "craco", fontSize: 27 },
  { title: "graphQL", fontSize: 28 },
  { title: "apollo", fontSize: 27 },
  { title: "React Native", fontSize: 31 },
  { title: "Gatsby", fontSize: 12 },
  { title: "Electron", fontSize: 31 },
  { title: "REST API", fontSize: 40 },
  { title: "indexedDB", fontSize: 23 },
  { title: "liteSQL", fontSize: 10 },
  { title: "Heroku", fontSize: 27 },
  { title: "vue", fontSize: 14 },
  { title: "ccs in js", fontSize: 18 },
  { title: "EJS", fontSize: 11 },
  { title: "JWT", fontSize: 21 },
];

const Skills = () => {
  return (
    <section className="section skills">
      <SectionHeader title={"skills"} />
      <div className="section-body">
        <TagCloud
          style={{
            padding: 11,
            width: "100%",
            height: "99%",
            fontFamily: "Rubik",
            color: () => randomColor(),
          }}
        >
          {tags.map(({ fontSize, title }, i) => (
            <div
              data-aos="fade"
              data-aos-delay={i * 150}
              className="tag"
              data-text={title}
              style={{ fontSize }}
            >
              {title}
            </div>
          ))}
        </TagCloud>
      </div>
    </section>
  );
};

export default Skills;
