import "./App.css";
import { Name } from "./components/Name";
import { users } from "./data/users";
import { Badges } from "./components/Badges";


function App() {
  return (
    <div className="App">
      {users.map((user) =>(
        <div><Name name={user.name} />
        <Badges badges={user.badges} /></div>
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
  return name.slice(0, 5);
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
