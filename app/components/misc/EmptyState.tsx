import React from 'react';
import NoDataIcon from '@/app/assets/icons/noData.svg';
import '@/app/styles/empty-state.css';

interface EmptyStateProps {
  description?: string;
  className?: string;
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const EmptyState: React.FC<EmptyStateProps> = ({
  description = 'No records found.',
  className = '',
  children = null,
  size = 'medium',
}) => {
  return (
    <div className={`empty-state flex flex-col justify-center items-center gap-4 ${className}`}>
      {size === 'small' && <NoDataIcon className="w-[70px] h-[70px]" />}
      {size === 'medium' && <NoDataIcon className="w-[120px] h-[120px]" />}
      {size === 'large' && <NoDataIcon className="w-[200px] h-[200px]" />}
      {children}
      <p className="text-sm text-gray-500 font-normal">{description}</p>
    </div>
  );
};

export default EmptyState;
