import "./App.css";
import {Name} from "./components/Name"

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
      <Name/>
      {users.map(user => <div>{updateNameViola(user)}</div>)}    
      {users.map(user => <div>{updateNameJula(user)}</div>)}    
    </div>
  );
}

export default App;

let text1 = "bartek jest kotem";
const slicefunction = (text1) => {
  return text1.slice(0, 5);
};

const updateNameViola = (name) => {
  return getletter_for_position(name , 0);
};

let text = "viola123";

const getletter_for_position = (text, position) => {
  return text.charAt(position);
};

const updateNameBartek = (name) => {
  return name + "1";
};

const updateNameJula = (name) => {
  return name.replace(/jula/g, "julka");
};

const updateNameJulia = (name) => {
  return name + " 1";
};

{/* {updateNameViola(users[2])}
{getletter_for_position(text, 0)}
{updateNameOla(users[0])}
{updateNameJula(users [1])}
{updateNameBartek(users[4])}
{updateNameJulia("Julia")}
{slicefunction(text1)} */}