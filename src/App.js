import React, { useEffect, useState, useRef } from "react";
import Lists from "./Components/Users/List";
import Details from "./Components/Users/Details";
import "./App.css";

function App() {
  const [list, setList] = useState();
  const [info, setInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  const infoRef = useRef();
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
    )
      .then((response) => response.json())
      .then((result) => {
        setList(result);
        setIsLoading(true);
      })
      .catch((e) => console.log(e))
      .finally(function () {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      });
  }, []);
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
            isLoading={isLoading}
            list={list}
          />
          {info && <Details info={info} isLoadingDetails={isLoadingDetails} />}
        </div>
      </div>
    </div>
  );
}

export default App;
