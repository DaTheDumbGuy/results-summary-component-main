import { useEffect, useState } from "react";
import { fetchData } from "../services/fetchData";
import SummaryData from "./SummaryData.jsx";

export default function Summary() {
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

  //   Return Error
  if (error) {
    return <div> Error: {error}</div>;
  }

  return (
    <section>
      <h2>This is Summary</h2>
      <ul>
        {data.map((summary) => (
          <SummaryData key={summary.category} summary={summary} />
        ))}
      </ul>
      <a href="#">Continue</a>
    </section>
  );
}
