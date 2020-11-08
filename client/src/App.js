import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((res) => setData(JSON.stringify(res)));
  }, []);

  return (
    <div>
      <h4>fetch("/api/") ...</h4>
      <p>{data}</p>
    </div>
  );
}
