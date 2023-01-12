import "./App.css";

function App() {
  const ola = "Ola baranska1";
  const jula = "Jula Dobrzyńska-Kobylec";
  const viola = "Violetta Wolniewicz";
  const bartek = "Bartosz Frankowski";
  const julia = "Julia Żuchewicz"
  return (
    <div className="App">
      {getletter_for_position(text, 0)}
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
let text = "viola123";

const getletter_for_position = (text, position) => {
  return text.charAt(position);
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
const updateNameJulia = (name) => {
  return name + " 1";
}

