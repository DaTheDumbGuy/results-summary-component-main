import { useEffect, useState } from "react";
import { fetchData } from "./services/fetchData";

export default function Test() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchData()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      {" "}
      {data.map((a) => (
        <div key={a.category}>
          <p>{a.category}</p>
          <p>{a.score}</p>
          <p>{a.icon}</p>
        </div>
      ))}
    </div>
  );
}
