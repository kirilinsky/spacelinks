import React from "react";
import { useHistory } from "react-router-dom";

const SectionHeader = () => {
  const _history = useHistory();
  return (
    <div className="section-header">
      <button
        onClick={() => _history.push("/")}
        className="section-header_back"
      >
        back
      </button>
      h
    </div>
  );
};

export default SectionHeader;
