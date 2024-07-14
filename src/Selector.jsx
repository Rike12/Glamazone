import React from 'react';

const CategorySelector = ({ selectedCategory, onSelectCategory }) => {
  const categories = ['Lips', 'Foundation', 'Powder', 'Eyeshadow'];

  return (
    <div className="flex justify-around mb-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 font-medium ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
