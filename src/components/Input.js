import React, { useState } from "react";

const Input = () => {
  const [input, setInput] = useState({});

  function handleChange(e) {
    const value = e.target.value;
    const type = e.target.name;
    setInput({ ...input, [type]: value });
    console.log(input);
  }

  return (
    <div>
      <input
        style={{ padding: "10px" }}
        placeholder="FirstName"
        type="email"
        name="first-name"
        value={input.value}
        onChange={handleChange}
      />

      <input
        style={{ padding: "10px" }}
        placeholder="Email"
        type="email"
        name="email"
        value={input.value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
