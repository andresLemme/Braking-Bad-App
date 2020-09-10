import React from "react";

const Qoutes = (props) => {
  const {text, author} = props.quote
  return (
    <div>
      <p>
        {text} <br />
        <span>- {author}</span>
      </p>
    </div>
  );
};

export default Qoutes;
