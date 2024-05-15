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
    <section className="summary_section">
      <h2>Summary</h2>
      <ul>
        {data.map((summary) => (
          <SummaryData key={summary.category} summary={summary} />
        ))}
      </ul>
      <a href="#" className="continue_btn">
        Continue
      </a>
    </section>
  );
}
