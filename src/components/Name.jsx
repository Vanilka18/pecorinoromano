export const Name = (props) => {
  console.log(props);
  return <div>{props.name.repeat(3) + " "}</div>;
};
