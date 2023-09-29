// Karakter bileşeniniz buraya gelecek
import React from "react";
import KarakterDetails from "./KarakterDetails";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

function Karakter(props) {
  if (!props.viewData) return <h3>Loading...</h3>;
  return (
    <>
      <div className="list">
        {props.viewData.map((item, i) => (
          <div
            className={`list-item ${props.selected === item ? "active" : ""}`}
            key={i}
            onClick={() => props.clickProp(i)}
          >
            <h6>{item.name}</h6>
            <button>{item["birth_year"]}</button>
            {/*  <KarakterDetails data={props.viewData} /> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default Karakter;
