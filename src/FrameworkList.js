import React from "react";

const FrameworkList = (props) => {
  if (!props.frameworks || !props.frameworks.length) {
    return <h1>No data !</h1>;
  }
  return (
    <div>
      {/* propsで受け取った配列をmapで展開 */}
      <ul>
        {props.frameworks.map(({ id, item }) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FrameworkList;
