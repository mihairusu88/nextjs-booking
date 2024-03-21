import React from 'react';
import { category } from '@prisma/client';

interface PopularServicesFilterProps {
  categories: category[];
  onFilterByCategory: (caregoryId: number) => void;
}

const PopularServicesFilter: React.FC<PopularServicesFilterProps> = ({ categories, onFilterByCategory }) => {
  return (
    <div className="home-popular-services-filter flex flex-wrap gap-2 mb-4 justify-center">
      {categories.length > 0 && (
        <>
          <button
            type="button"
            className="btn btn-primary btn-outline btn-sm rounded-badge"
            onClick={() => onFilterByCategory(0)}
          >
            All
          </button>
          {categories.map((category: category) => (
            <button
              type="button"
              key={category.id}
              className="btn btn-primary btn-outline btn-sm rounded-badge"
              onClick={() => onFilterByCategory(category.id)}
            >
              {category.title}
            </button>
          ))}
        </>
      )}
      {!categories.length && <button className="btn btn-primary btn-outline btn-sm rounded-badge">All</button>}
    </div>
  );
};

export default PopularServicesFilter;
