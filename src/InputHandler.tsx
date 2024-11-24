import React, { useState } from "react";

const InputHandler: React.FC = () => {
  const [value, setValue] = useState<string>();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Please enter code"
        onChange={onChange}
      />
      <p>You enter text: {value}</p>
    </div>
  );
};

export default InputHandler;
