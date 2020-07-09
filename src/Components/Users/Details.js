import React, { useEffect, useState, useRef } from "react";
function Details({ usersId }) {
  const [info, setInfo] = useState();
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const infoRef = useRef();
  useEffect(() => {
    if (info) {
      infoRef.current = info.id;
    }

    if (infoRef.current !== Number(usersId)) {
      fetch(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data//${usersId}.json`
      )
        .then((response) => response.json())
        .then((result) => {
          setInfo(result);
          setIsLoadingDetails(true);
        })
        .catch((e) => console.log(e))
        .finally(function () {
          setTimeout(() => {
            setIsLoadingDetails(false);
          }, 500);
        });
    }
  });

  return (
    <>
      {isLoadingDetails ? (
        "Loading..."
      ) : (
        <div className="card col-3">
          <img
            src={info && info.avatar + "?" + info.id}
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
