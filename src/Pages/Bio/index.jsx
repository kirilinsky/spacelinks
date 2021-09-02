import React from "react";
import SectionHeader from "../../components/SectionHeader";
import "./style.scss";
const Bio = () => {
  return (
    <section className="section bio">
      <SectionHeader title={"bio"} />
      <div className="section-body">
        <div className="bio-grid">
          <div className="bio-grid-cell">
            <h1>about</h1>
            <p>Kirill Chernenko</p>
            <p>frontend-developer</p>
          </div>
          <div className="bio-grid-cell bio-grid-cell-pic"></div>
          <div className="bio-grid-cell"></div>
          <div className="bio-grid-cell">
            <h2>links</h2>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/kirilinsky"
            >
              github
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.codewars.com/users/kirilinsky"
            >
              codewars
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.npmjs.com/~kirilinsky"
            >
              npm
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
