import React from "react";
function Details({ info, isLoadingDetails }) {
  return (
    <>
      {isLoadingDetails ? (
        "Loading..."
      ) : (
        <div className="card col-3">
          <img
            src={info && info.avatar + info.id}
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">{info && info.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              City: {info && info.details.city}{" "}
            </li>
            <li className="list-group-item">
              Company: {info && info.details.company}
            </li>
            <li className="list-group-item">
              Position: {info && info.details.position}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
export default Details;
