import React from "react";

// Định nghĩa kiểu cho props
interface WelcomeProps {
  name: string;
  location: string;
}

const Welcome: React.FC<WelcomeProps> = ({ name, location }) => {
  return (
    <div>
      <h2>Xin chào, {name}!</h2>
      <p>Bạn đến từ {location}.</p>
    </div>
  );
};

export default Welcome;
