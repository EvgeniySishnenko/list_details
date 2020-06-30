import React from "react";
function Lists(props) {
  const { list, isLoading } = props;
  function onShowDetails(e) {
    props.onShowDetails(e.target.dataset.id);
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
                onClick={onShowDetails}
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
