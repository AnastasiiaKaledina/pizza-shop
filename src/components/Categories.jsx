import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterSelector, setActiveCategory } from '../redux/slices/filterSlice';

const Categories = () => {
  const { activeCategory } = useSelector(filterSelector);
  const dispatch = useDispatch();

  const typesTaste = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onClick = (index) => {
    dispatch(setActiveCategory(index));
  }

  return (
    <div className="categories">
      <ul>
        {typesTaste.map((taste, index) => (
          <li
            className={activeCategory === index ? 'active' : ''}
            key={taste}
            onClick={() => onClick(index)}>
            {taste}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
