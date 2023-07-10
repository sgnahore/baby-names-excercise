import babyNamesData from "./babyNamesData.json";
import "./sexArrangement.css";

function App(): JSX.Element {
  const objectArray: { sex: string; name: string }[] = [];
  for (const element of babyNamesData) {
    objectArray.push(element);
  }
  console.log(objectArray);

  const ordered = objectArray.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <>
      {ordered.map(
        (babyNameData: { sex: string; name: string }, index: number) => (
          <div className="allNames" key={index}>
            {babyNameData.sex === "f" && (
              <p className="femaleNames">{babyNameData.name}</p>
            )}
            {babyNameData.sex === "m" && (
              <p className="maleNames">{babyNameData.name}</p>
            )}
          </div>
        )
      )}
    </>
  );
}

export default App;
