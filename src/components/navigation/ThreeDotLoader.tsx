import React from 'react';

const ThreeDotLoader: React.FC = () => {
  return (
    <div className="flex space-x-1 justify-center items-center">
      {[1, 2, 3].map((dot) => (
        <div
          key={dot}
          className="w-2 h-2 bg-current rounded-full animate-bounce"
          style={{
            animationDelay: `${(dot - 1) * 0.2}s`,
            animationDuration: '0.8s'
          }}
        />
      ))}
    </div>
  );
};

export default ThreeDotLoader;
