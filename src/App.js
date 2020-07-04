import React, { useEffect, useState, useRef } from "react";
import Lists from "./Components/Users/List";
import Details from "./Components/Users/Details";
import "./App.css";

function App() {
  const [info, setInfo] = useState();
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const infoRef = useRef();

  function showDetails(id) {
    if (info) {
      infoRef.current = info.id;
    }
    if (infoRef.current !== Number(id)) {
      fetch(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data//${id}.json`
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
  }
  return (
    <div className="App">
      <div className="container ">
        <div className="row mt-4">
          <Lists
            onShowDetails={showDetails}
            // isLoading={isLoading}
            // list={list}
          />
          {info && <Details info={info} isLoadingDetails={isLoadingDetails} />}
        </div>
      </div>
    </div>
  );
}

export default App;
