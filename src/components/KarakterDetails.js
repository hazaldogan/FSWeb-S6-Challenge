import React from "react";

function KarakterDetails(props) {
  return (
    <>
      {props.data.map((item, i) => (
        <div key={i} className="item-details">
          <p>Gender: {item.gender}</p>
          <p>Birth Year: {item.birth_year}</p>
          <p>Height: {item.height}</p>
          <p>Mass: {item.mass}</p>
          <p>Eye Color: {item.eye_color}</p>
          <p>Hair Color: {item.hair_color}</p>
          <p>Skin Color: {item.skin_color}</p>
          <div className="films">
            Films
            <ul>
              {props.data[i].films.map((film, i) => (
                <li key={i}>{film}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}

export default KarakterDetails;
