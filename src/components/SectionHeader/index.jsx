import React from "react";
import { useHistory } from "react-router-dom";
import backIco from "./assets/back.svg";

const SectionHeader = ({ title = "title" }) => {
  const _history = useHistory();
  return (
    <div className="section-header">
      <button
        onClick={() => _history.push("/")}
        className="section-header_back"
      >
        <img src={backIco} alt="back" />
      </button>
      {title}
    </div>
  );
};

export default SectionHeader;
