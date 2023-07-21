"use client";

const MyButton = (props) => {
  const { children, handleOnClick } = props;
  console.log(props);
  return <button onClick={handleOnClick}>{children}</button>;
};

export default MyButton;
