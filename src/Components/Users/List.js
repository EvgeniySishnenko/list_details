import React, { useEffect, useState } from "react";
function Lists(props) {
  const [list, setList] = useState();
  const [isLoading, setIsLoading] = useState(false);
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
  function onGetId(e) {
    props.onGetId(e.target.dataset.id);
    const wrapObj = document.querySelector(".list-group ");

    for (let i = 0; i < wrapObj.children.length; i++) {
      wrapObj.children[i].classList.remove("active");
    }
    e.target.classList.add("active");
  }
  return (
    <ul className="list-group col-3">
      {isLoading
        ? "Loading..."
        : list &&
          list.map((item) => {
            return (
              <li
                onClick={onGetId}
                key={item.id}
                data-id={item.id}
                className="list-group-item"
              >
                {item.name}
              </li>
            );
          })}
    </ul>
  );
}
export default Lists;
