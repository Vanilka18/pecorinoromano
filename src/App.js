import "./App.css";
import { Name } from "./components/Name";
import { users } from "./data/users";
import { Badges } from "./components/Badges";
import { Profile } from "./components/Profile";
import styled from "styled-components";

function App() {
  return (
    <StyledWrapper>
      {users.map((user) => (
        <Profile user={user} />
      ))}
    </StyledWrapper>
  );
}

export default App;

const StyledWrapper = styled("div")(() => ({
  border: "1px solid black",
  width: "300px",
  padding: "10px",
  margin: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));
