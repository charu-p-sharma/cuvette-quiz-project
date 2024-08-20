import React, { useState } from 'react';
import '../styles/CreateQuizModal.css'; // Link to the CSS file

function CreateQuizModal({ isOpen, onClose }) {
  const [quizType, setQuizType] = useState(''); // State to manage quiz type

  if (!isOpen) return null;

  const renderPollForm = () => (
    <div className="poll-form">
      <div className="qa-header">
        <span>1</span>
        <span>2</span>
        <span className="add-question">+</span>
        <span className="max-questions">Max 5 questions</span>
      </div>
      <input type="text" placeholder="Poll Question" className="poll-question" />
      <div className="option-type">
        <label>Option Type</label>
        <div className="option-type-options">
          <label><input type="radio" name="optionType" value="text" defaultChecked /> Text</label>
          <label><input type="radio" name="optionType" value="image" /> Image URL</label>
          <label><input type="radio" name="optionType" value="text-image" /> Text & Image URL</label>
        </div>
      </div>
      <div className="option-list">
        <div className="option">
          <input type="text" placeholder="Text" className="option-input" />
          <button className="remove-option">❌</button>
        </div>
        <div className="option">
          <input type="text" placeholder="Text" className="option-input" />
          <button className="remove-option">❌</button>
        </div>
        <div className="option">
          <input type="text" placeholder="Text" className="option-input" />
          <button className="remove-option">❌</button>
        </div>
        <button className="add-option">Add option</button>
      </div>
    </div>
  );

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create Quiz</h2>
        <form>
          {quizType === 'Q & A' ? (
            // Render Q & A form
            renderPollForm()
          ) : quizType === 'Poll' ? (
            renderPollForm()
          ) : (
            <div className="form-group">
              <label>Quiz Name</label>
              <input type="text" placeholder="Quiz name" />
              <div className="quiz-type-options">
                <button type="button" className="quiz-type-btn" onClick={() => setQuizType('Q & A')}>Q & A</button>
                <button type="button" className="quiz-type-btn" onClick={() => setQuizType('Poll')}>Poll Type</button>
              </div>
            </div>
          )}
          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="continue-btn">Create Quiz</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateQuizModal;
