import React from 'react';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  classNameContainer?: string;
}
const Loading: React.FC<LoadingProps> = ({ size = 'medium', className = '', classNameContainer = '' }) => {
  return (
    <div className={`loading-container ${classNameContainer}`}>
      {size === 'small' && <span className={`loading loading-spinner loading-sm ${className}`}></span>}
      {size === 'medium' && <span className={`loading loading-spinner loading-md ${className}`}></span>}
      {size === 'large' && <span className={`loading loading-spinner loading-lg ${className}`}></span>}
    </div>
  );
};

export default Loading;
