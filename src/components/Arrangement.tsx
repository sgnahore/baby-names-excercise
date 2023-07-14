import babyNamesData from "../babyNamesData.json";
import "./Arrangement.css";
import React from "react";

export default function Arrangement(): JSX.Element {
  const objectArray: { sex: string; name: string }[] = [];
  for (const element of babyNamesData) {
    objectArray.push(element);
  }
  console.log(objectArray);

  const ordered = objectArray.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <>
    <input></input>
    <div className="allNames">
      {ordered.map(
        (babyNameData, id) => (
            <button className={babyNameData.sex === "f" ? "femaleNames": "maleNames"} key={id}>{babyNameData.name}</button>
        )
      )} </div>
    </>
  );
}

