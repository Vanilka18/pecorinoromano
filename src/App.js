import "./App.css";

function App() {
  const ola = "Ola baranska";
  const jula = "Jula Dobrzyńska-Kobylec";
  const viola = "Violetta Wolniewicz";
  const bartek = "Bartosz Frankowski";
  const julia = "Julia Żuchewicz"
  return (
    <div className="App">
      {updateNameOla("ola")}
      {updateNameJula("jula")}
      {updateNameViola("viola")}
      {updateNameBartek("bartek")}
      {updateNameJulia("Julia")}
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
  return name.replace(/jula/g, "julka");
};

const updateNameOla = (name) => {
  return name.repeat(3) + " "
}

