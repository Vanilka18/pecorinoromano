import "./App.css";

function App() {
  const ola = "ola baranska"
  const jula = "Jula Dobrzyńska-Kobylec";
  const viola = "Violetta Wolniewicz";
  const bartek = "Bartosz Frankowski";
  return (
    <div className="App">
      <div>{ola}</div>
      <div>{jula}</div>
      {updateNameviola("viola")}
      <div>{bartek}</div>
    </div>
  );
}

export default App

const updateNameviola = (name) => {
  return name + "1"
}


