import { useStore } from "@nanostores/react";
import { category } from "../productStore";

const SelectCategory = ({ categories }) => {
  
  const selectedCategory = useStore(category);

  const handleCategoryChange = (value) => {
    category.set(value);
  }

  return (
    <select
      name='categories'
      id='categories'
      value={selectedCategory}
      className='bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      onChange={(e) => handleCategoryChange(e.target.value)}
    >
      <option
        value=''
        disabled        
      >Elige una categoría
      </option>				
      {categories.map((category) => (
        <optgroup 
          key={category.id} 
          label={category.name}
        >
          {category.categories.map((subCategory) => (
            <option 
            key={subCategory.id} 
            value={subCategory.id}
            >
            {subCategory.name}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
};

export default SelectCategory;