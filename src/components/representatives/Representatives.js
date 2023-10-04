import React, { useState } from "react";
import { representatives } from "./data/representatives.data";
import './Representatives.css'; 

const Representatives = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleExpand = (id) => {
    setExpandedId(id === expandedId ? null : id);
  };

  return (
    <div className="representatives-container">
      {representatives.map((representative) => (
        <div className="card" key={representative.id}>
          <div className="card-content">
            <div className="text-content">
              <h2>{representative.name}</h2>
              <p>
                {expandedId === representative.id
                  ? representative.description
                  : `${representative.description.slice(0, 100)}...`}
              </p>
              <button onClick={() => handleExpand(representative.id)}>
                {expandedId === representative.id ? "Скрыть" : "Читать далее"}
              </button>
            </div>
            <img src={representative.image} alt={representative.name} className="card-image" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Representatives;
