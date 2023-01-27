import "./App.css";
import { Name } from "./components/Name";

function App() {
  const users = [
    "Ola Barańska",
    "Jula Dobrzyńska-Kobylec",
    "Violetta Wolniewicz",
    "Bartosz Frankowski",
    "Julia Żuchewicz",
  ];

  return (
    <div className="App">
      {users.map((user) => (
        <Name name={user} />
      ))}
    </div>
  );
}

export default App;

const updateNameViola = (name) => {
  return getletter_for_position(name, 0);
};

let text = "viola123";

const getletter_for_position = (text, position) => {
  return text.charAt(position);
};

const updateNameBartek = (name) => {
  return name.slice(o, 5);
};

const updateNameJula = (name) => {
  return name.replace(/jula/g, "julka");
};

const updateNameJulia = (name) => {
  return name + " 1";
};

{
  /* {updateNameViola(users[2])}
{getletter_for_position(text, 0)}
{updateNameOla(users[0])}
{updateNameJula(users [1])}
{updateNameBartek(users[4])}
{updateNameJulia("Julia")}
{slicefunction(text1)} */
}
