import React from "react";
import "./App.css";
import Welcome from "./Welcome";
import Counter from "./Couter";
import InputHandler from "./InputHandler";
import FetchData from "./FetchData";
import UserProfile from "./components/UserProfile";
import { AppProvider } from "./context/AppProvier";
import CounterWithReducer from "./components/CounterWithReducer";

function App() {
  return (
    <AppProvider>
      {/* <Welcome name="ngoc" location="Ha tinh" />
      <Counter />
      <InputHandler /> */}
      {/* <FetchData /> */}
      <UserProfile />
      <CounterWithReducer />
    </AppProvider>
  );
}

export default App;
