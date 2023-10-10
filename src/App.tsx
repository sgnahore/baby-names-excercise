import "./myStyles.css";
import names from "./data/babyNamesData.json";
import { useState, useEffect } from "react";
import BabyNames from "./utils/babyNames";

function App(): JSX.Element {
  const babyNames: BabyNames[] = names.sort((a, b) =>
    a.name > b.name ? 1 : -1
  );

  const [chosenNames, setChosenNames] = useState<BabyNames[]>([]);
  const [allNames, setAllNames] = useState<BabyNames[]>(babyNames);
  const [text, setText] = useState(""); // state for search bar

  useEffect(() => {
    setAllNames(
      babyNames.filter((names) =>
        names.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  }, [text, babyNames]);

  const handleAllNames = () => {
    const tempBabyNames: BabyNames[] = babyNames.filter(function (el) {
      return !chosenNames.includes(el);
    });
    setAllNames(tempBabyNames);
  };
  const handleFemaleNames = () => {
    let tempBabyNames: BabyNames[] = babyNames.filter(function (el) {
      return !chosenNames.includes(el);
    });
    tempBabyNames = tempBabyNames.filter((names) =>
      names.name.toLowerCase().includes(text.toLowerCase())
    );
    setAllNames(tempBabyNames.filter((obj) => obj.sex === "f"));
  };
  const handleMaleNames = () => {
    let tempBabyNames: BabyNames[] = babyNames.filter(function (el) {
      return !chosenNames.includes(el);
    });
    tempBabyNames = tempBabyNames.filter((names) =>
      names.name.toLowerCase().includes(text.toLowerCase())
    );
    setAllNames(tempBabyNames.filter((obj) => obj.sex === "m"));
  };
  const handleChooseName = (clickedName: BabyNames) => {
    setChosenNames([...chosenNames, clickedName]);
    setAllNames(allNames.filter((obj) => obj !== clickedName));
  };
  const handleMoveBack = (clickedName: BabyNames) => {
    setAllNames(
      [...allNames, clickedName].sort((a, b) => (a.name > b.name ? 1 : -1))
    );
    setChosenNames(chosenNames.filter((obj) => obj !== clickedName));
  };

  const handleReset = () => {
    const tempChosenNames = chosenNames;
    let tempAllNames = allNames;
    tempChosenNames.map((el) => tempAllNames.push(el));
    tempAllNames = tempAllNames.sort((a, b) => (a.name > b.name ? 1 : -1));
    setAllNames(tempAllNames);
    setChosenNames([]);
  };

  const isMale = (checkSex: string) => {
    return checkSex === "m" ? true : false;
  };

  return (
    <body>
      <div className="main">
        <>
          Chosen names:
          {chosenNames.map((chosenName) => {
            return (
              <button
                className={isMale(chosenName.sex) ? "blue" : "pink"}
                onClick={() => handleMoveBack(chosenName)}
                key={chosenName.id}
              >
                {chosenName.name}
              </button>
            );
          })}
        </>
      </div>
      <>
        Reset names:
        <button className="all" onClick={handleReset}>
          {chosenNames.some((el) => el.name === "Adam") &&
          chosenNames.some((el) => el.name === "Ela") &&
          chosenNames.some((el) => el.name === "Tomasz")
            ? "💗"
            : "Reset"}
        </button>
      </>
      <br />
      <p className="main">
        {" "}
        Filter:{" "}
        <input
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <button className="all" onClick={handleAllNames}>
          All names
        </button>
        <button className="pink" onClick={handleFemaleNames}>
          Female names
        </button>
        <button className="blue" onClick={handleMaleNames}>
          Male names
        </button>
      </p>

      <br></br>
      <div className="main">
        All names:
        {allNames.map((babyName) => {
          return (
            <button
              className={isMale(babyName.sex) ? "blue" : "pink"}
              onClick={() => handleChooseName(babyName)}
              key={babyName.id}
            >
              {babyName.name}
            </button>
          );
        })}
      </div>
    </body>
  );
}
export default App;
