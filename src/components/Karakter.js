// Karakter bileşeniniz buraya gelecek
import React, { useState } from "react";
import KarakterDetails from "./KarakterDetails";

function Karakter(props) {
  const [isOpen, setIsOpen] = useState(false);
  if (!props.viewData) return <h3>Loading...</h3>;
  return (
    <>
      <div className="list">
        {props.viewData.map((item, i) => (
          <div
            className={`list-item ${isOpen ? "active" : ""}`}
            key={i}
            onClick={() => setIsOpen(!isOpen)}
          >
            <h6>{item.name}</h6>
            <div className="arrow">{`>`}</div>
            <KarakterDetails data={props.viewData} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Karakter;
