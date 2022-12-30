import "./App.css";

function App() {
  const ola = "ola baranska";
  const jula = "Jula Dobrzyńska-Kobylec";
  const viola = "Violetta Wolniewicz";
  const bartek = "Bartosz Frankowski";
  return (
    <div className="App">
      <div>{ola}</div>
      {updateNamejula("jula")}
      {updateNameviola("viola")}
      {updateNamebartek("bartek")}
    </div>
  );
}

export default App;

const updateNameviola = (name) => {
  return name + "1";
};

const updateNamebartek = (name) => {
  return name + " 1";
};

const updateNamejula = (name) => {
  return name + " 1";
};

