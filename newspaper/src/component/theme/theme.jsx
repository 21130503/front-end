import React from 'react';
import useDarkMode from './path/to/useDarkMode';

const Theme = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <button onClick={toggleDarkMode} className="p-2 mt-4 ml-4">
        Toggle Dark Mode
      </button>
      <p>Chế độ hiện tại: {isDarkMode ? 'Tối' : 'Sáng'}</p>
    </div>
  );
};

export default Theme;
