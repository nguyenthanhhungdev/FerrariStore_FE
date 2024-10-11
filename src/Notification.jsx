// src/Notification.jsx
import { useEffect, useState } from 'react';
import './Notification.css';

// eslint-disable-next-line react/prop-types
function Notification({ message, onClose, duration = 3000 }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => prev - 100 / (duration / 100));
    }, 100);

    const timeout = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [duration, onClose]);

  return (
    <div className="notification">
      <p>{message}</p>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Notification;