export default function SummaryData({ summary }) {
  return (
    <li className={`container_${summary.category.toLowerCase()}`}>
      <div className={`s_category ` + summary.category.toLowerCase()}>
        {" "}
        <img src={summary.icon} alt="" width={20} height={20} />
        <span>{summary.category}</span>
      </div>
      <div className="s_score">
        {summary.score} <span>/ 100</span>
      </div>
    </li>
  );
}
