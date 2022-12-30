import "./App.css";

function App() {
  const ola = "ola baranska";
  const jula = "Jula Dobrzyńska-Kobylec";
  const viola = "Violetta Wolniewicz";
  const bartek = "Bartosz Frankowski";
  return (
    <div className="App">
      {updateNameOla("ola")}
      {updateNameJula("jula")}
      {updateNameViola("viola")}
      {updateNameBartek("bartek")}
    </div>
  );
}

export default App;

const updateNameViola = (name) => {
  return name + "1";
};

const updateNameBartek = (name) => {
  return name + " 1";
};

const updateNameJula = (name) => {
  return name + " 1";
};

const updateNameOla = (name) => {
  return name + "1"
}

