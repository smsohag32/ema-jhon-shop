import React from "react";

const AddItems = (props) => {
  const { id, name } = props.item;
  console.log(props);
  return (
    <div className="w-full">
      <p>{name}</p>
    </div>
  );
};

export default AddItems;
