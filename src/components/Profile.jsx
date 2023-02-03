import { Badges } from "./Badges";
import { Name } from "./Name";

export const Profile = ({user}) => {
  
    return  <div><Name name={user.name} />
    <Badges badges={user.badges} /></div>;
  };