import React, { useState } from 'react';
import '../styles/Sidebar.css'; // Link to the CSS file for Sidebar
import CreateQuizModal from './CreateQuixModal.jsx';

function Sidebar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <>
        <aside className="sidebar">
          <h1>QUIZZIE</h1>
          <nav>
            <ul>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/analytics">Analytics</a></li>
              <li><button className="create-quiz-btn" onClick={openModal}>Create Quiz</button></li>
            </ul>
          </nav>
          <button className="logout-btn">LOGOUT</button>
        </aside>
        <CreateQuizModal isOpen={isModalOpen} onClose={closeModal} />
      </>
    );
  }

export default Sidebar;

