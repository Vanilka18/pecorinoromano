import styled from "styled-components";
import { Badges } from "./Badges";
import { Name } from "./Name";

export const Profile = ({user}) => {
  
    return  <StyledWrapper><Name name={user.name} />
    <Badges badges={user.badges} /></StyledWrapper>;
  };
  const StyledWrapper= styled ("div") (()=>({
    border: "1px solid black", 
    width: "250px",
    padding: "10px",
    margin: "10px"

  }))