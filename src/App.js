import "./App.css";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import { useState } from "react";

const avalibleChangePercentage = [-25, -10, +10, +25];
const progresss = ["#progress 1", "#progress 2", "#progress 3"];

function floor(num) {
  if (num < 0) num = 0;
  return num;
}

function App() {
  const [progress, setProgress] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [bar, setBar] = useState("bar1");

  const handleClick = (num) => {
    switch (bar) {
      case "bar1":
        setProgress(floor(progress + num));
        break;
      case "bar2":
        setProgress2(floor(progress2 + num));
        break;
      case "bar3":
        setProgress3(floor(progress3 + num));
        break;
      default:
        console.error("No such bar!");
    }
  };

  const handleSelection = (e) => {
    setBar(e.target.value);
  };

  return (
    <div className="App">

      <h2 className="Title">Progress Bars Demo</h2>
      <ProgressBar completed={floor(progress)} />
      <ProgressBar completed={floor(progress2)} />
      <ProgressBar completed={floor(progress3)} />

      <div className="OperationalItem">
        
        <select value={bar} onChange={handleSelection} className="DropdownWrapper">
          {progresss.map((progress, indx) => {
            return (
              <option className= "DropdownItem" key={indx} value={`bar${(indx + 1).toString()}`}>
                {progress}
              </option>
            );
          })}
        </select>

        {avalibleChangePercentage.map((item, indx) => {
          if (item < 0) {
            return (
              <button key={indx} onClick={() => handleClick(item)}>
                {item.toString()}
              </button>
            );
          } else {
            return (
              <button className="ChangeButton" key={indx} onClick={() => handleClick(item)}>
                {`+${item}`}
              </button>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
