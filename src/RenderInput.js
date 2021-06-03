import React from "react";

const RenderInput = ({ outputConsole }) => {
  const [input, setInput] = React.useState("");
  const outputValue = () => {
    // なんらかの入力があった場合
    if (input) {
      // 関数を実行する
      outputConsole(input);
    }
  };
  const updateValue = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter"
        value={input}
        onChange={updateValue}
      />
      <button onClick={outputValue}>Console</button>
    </div>
  );
};

export default RenderInput;
