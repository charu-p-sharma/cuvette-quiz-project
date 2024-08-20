import '../styles/Dashboard.css'; // Link to the CSS file
import Sidebar from './Sidebar.jsx';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar/>

      <main className="content">
        <div className="stats">
          <div className="stat-item">
            <h2>12</h2>
            <p>Quiz Created</p>
          </div>
          <div className="stat-item">
            <h2>110</h2>
            <p>Questions Created</p>
          </div>
          <div className="stat-item">
            <h2>989</h2>
            <p>Total Impressions</p>
          </div>
        </div>

        <section className="trending-quizzes">
          <h3>Trending Quizzes</h3>
          <div className="quiz-list">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="quiz-item">
                <h4>Quiz {index + 1}</h4>
                <p>667</p>
                <span>Created on: 01 Sep, 2023</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
