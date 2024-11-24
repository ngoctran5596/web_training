import React, { useReducer } from "react";

interface State {
  count: number;
}

const initialState: State = { count: 0 };

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "double" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "double":
      return { count: state.count + 2 };
    default:
      throw new Error("Unknown action type");
  }
};

const CounterWithReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const containerStyle = {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  };

  const buttonStyle = {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
  };

  const warningStyle = {
    color: "red",
    fontWeight: "bold" as const,
    marginTop: "10px",
  };

  return (
    <div style={containerStyle}>
      <h2>Bộ đếm: {state.count}</h2>
      <div>
        <button
          style={buttonStyle}
          onClick={() => dispatch({ type: "increment" })}
        >
          Tăng
        </button>
        <button
          style={buttonStyle}
          onClick={() => dispatch({ type: "decrement" })}
        >
          Giảm
        </button>
        <button style={buttonStyle} onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
        <button
          style={buttonStyle}
          onClick={() => dispatch({ type: "double" })}
        >
          Nhân đôi
        </button>
      </div>
      {state.count > 10 && <div style={warningStyle}>⚠️ Giá trị quá lớn!</div>}
      {state.count < 0 && <div style={warningStyle}>⚠️ Giá trị âm!</div>}
    </div>
  );
};

export default CounterWithReducer;
