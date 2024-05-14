export default function SummaryData({ summary }) {
  return (
    <li>
      <div className="s_category">
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
