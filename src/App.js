import React, { useState } from "react";
import Lists from "./Components/Users/List";
import Details from "./Components/Users/Details";
import "./App.css";

function App() {
  const [usersId, setUsersId] = useState();

  function getId(id) {
    setUsersId(id);
  }
  return (
    <div className="App">
      <div className="container ">
        <div className="row mt-4">
          <Lists onGetId={getId} />
          {usersId && <Details usersId={usersId} />}
        </div>
      </div>
    </div>
  );
}

export default App;
