import React, { useState, useEffect } from "react";

const FetchData: React.FC = () => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data.map((item: any) => item.title)));
  }, []); // Mảng phụ thuộc rỗng để chỉ gọi 1 lần

  return (
    <div>
      <h2>Danh sách bài viết:</h2>
      <ul>
        {data.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
