export const Badges = (props) => {
    console.log(props);
    return <div>{props.badges?.map((badge) =>
        <div>{badge}</div>)}</div>;
  };
  