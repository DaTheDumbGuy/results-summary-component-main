export default function Result() {
  return (
    <section className="result_section">
      <h2>Your Result</h2>
      <div className="result">
        <p>76</p>
        <p>of 100</p>
      </div>
      <div className="feedback_container">
        <h3>Great</h3>
        <p className="feedback">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  );
}
