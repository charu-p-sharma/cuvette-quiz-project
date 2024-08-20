import "../styles/Analytics.css";
import Sidebar from "./Sidebar";

function Analytics() {
  const quizData = [
    { id: 1, name: "Quiz 1", date: "01 Sep, 2023", impressions: "345" },
    { id: 2, name: "Quiz 2", date: "04 Sep, 2023", impressions: "667" },
    { id: 3, name: "Quiz 3", date: "06 Sep, 2023", impressions: "1.6K" },
    { id: 4, name: "Quiz 4", date: "09 Sep, 2023", impressions: "789" },
    { id: 5, name: "Quiz 5", date: "11 Sep, 2023", impressions: "995" },
    { id: 6, name: "Quiz 6", date: "13 Sep, 2023", impressions: "2.5K" },
    { id: 7, name: "Quiz 7", date: "14 Sep, 2023", impressions: "231" },
    { id: 8, name: "Quiz 8", date: "17 Sep, 2023", impressions: "1.3K" },
  ];

  return (
    <div className="analytics-container">
      <Sidebar />
      <main className="content">
        <h2>Quiz Analysis</h2>
        <table className="quiz-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Quiz Name</th>
              <th>Created on</th>
              <th>Impression</th>
              <th>Actions</th>
              <th>Analysis</th>
            </tr>
          </thead>
          <tbody>
            {quizData.map((quiz, index) => (
              <tr key={quiz.id}>
                <td>{index + 1}</td>
                <td>{quiz.name}</td>
                <td>{quiz.date}</td>
                <td>{quiz.impressions}</td>
                <td className="actions">
                  <button className="action-btn edit">✏️</button>
                  <button className="action-btn delete">❌</button>
                </td>
                <td>
                  <a href="#analysis">Question Wise Analysis</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>{" "}
      </main>
    </div>
  );
}

export default Analytics;
