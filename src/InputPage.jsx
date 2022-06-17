import "./styles/InputPage.css";
import j1 from "./json/categories";
import j2 from "./json/customers";
import j3 from "./json/orders";
import j4 from "./json/products";
import j5 from "./json/shippers";
import j6 from "./json/suppliers";
import { useState } from "react";
function InputPage() {
  const [data, setData] = useState([]);
  const [activeQuery, setActiveQuery] = useState("Select Query");
  const [dropdown, setDropdown] = useState(false);
  const [directionDown, setDirectionDown] = useState(false);
  function setResponse(q) {
    if (q === "create") setData(j1);
    else if (q === "update") setData(j2);
    else if (q === "alter") setData(j3);
    else if (q === "select") setData(j4);
    else if (q === "modify") setData(j5);
    else if (q === "commit") setData(j6);
  }
  const setActive = (q) => {
    setActiveQuery(q);
    setDropdown(false);
  };
  return (
    <div className="b1">
      <h1 className="header">SQL command mapping Tables</h1>
      <div className="input" onClick={() => {setDropdown(!dropdown); setDirectionDown(!directionDown);}}>
        <div></div>
        {activeQuery}
        {directionDown ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </div>

      {dropdown ? (
        <div className="options">
          <div className="option" onClick={() => {setActive("create"); setDirectionDown(false)}}>
            create
          </div>
          <div className="option" onClick={() => {setActive("update"); setDirectionDown(false)}}>
            update
          </div>
          <div className="option" onClick={() => {setActive("alter"); setDirectionDown(false)}}>
            alter
          </div>
          <div className="option" onClick={() => {setActive("select"); setDirectionDown(false)}}>
            select
          </div>
          <div className="option" onClick={() => {setActive("modify"); setDirectionDown(false)}}>
            modify
          </div>
          <div className="option" onClick={() => {setActive("commit"); setDirectionDown(false)}}>
            commit
          </div>
        </div>
      ) : null}
      <button className="btn" onClick={() => setResponse(activeQuery)}>
        Submit
      </button>
      {data.length ? (
        <div className="tableContainer">
          <table>
            <tbody>
              <tr className="rowHeader">
                {Object.keys(data[0]).map((td, key) => (
                  <td key={key + "td"}>{td}</td>
                ))}
              </tr>
              {data.map((tr, key) => (
                <tr key={key + "tr"}>
                  {Object.values(tr).map((td, key) => (
                    <td key={key + "td2"}>{td}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

export default InputPage;
