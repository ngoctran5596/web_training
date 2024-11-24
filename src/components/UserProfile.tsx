import React from "react";
import { AppContext } from "../context/AppProvier";

const UserProfile: React.FC = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("UserProfile must be used within an AppProvider");
  }

  const { user, setUser } = context;

  const changeUser = () => {
    setUser("Bảo Châu");
  };

  return (
    <div>
      <h2>Người dùng: {user}</h2>
      <button onClick={changeUser}>Đổi tên người dùng</button>
    </div>
  );
};

export default UserProfile;
