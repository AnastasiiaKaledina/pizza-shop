import React, { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MyContext } from '../App';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination/index';
import PizzaCard from '../components/PizzaCard/index';
import MyLoader from '../components/PizzaCard/Skeletion';
import Sort from '../components/Sort';
import { filterSelector, setFilter, setPageNumber } from '../redux/slices/filterSlice';
import qs from 'qs';
import { Link, useNavigate } from 'react-router-dom';
import { fetchPizzas } from '../redux/slices/pizzasSlice';

export const Home = () => {
  const { activeCategory, sortType, pageNumber } = useSelector(filterSelector);
  const { pizzas, status } = useSelector((state) => state.pizzas);

  const { searchString } = useContext(MyContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isMounted = useRef(false);
  const isParams = useRef(false);

  const getPizzas = async () => {
    dispatch(fetchPizzas({ activeCategory, sortType, pageNumber }));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortType: sortType.value,
        order: sortType.to,
        activeCategory,
        pageNumber,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [activeCategory, sortType, pageNumber]);

  useEffect(() => {
    if (window.location.search) {
      dispatch(setFilter(qs.parse(window.location.search.substring(1))));
      isParams.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isParams.current) {
      getPizzas();
    }
    isParams.current = false;
  }, [activeCategory, sortType, pageNumber]);

  const sortedPizzas = pizzas.filter((pizza) =>
    pizza.title.toLowerCase().includes(searchString.toLowerCase()),
  );

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort sortType={sortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>

      {status === 'error' ? (
        <div className="content__error-info">
          <h3>
            Произошла ошибка<span>😕</span>
          </h3>
          <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">
          {status === 'loading'
            ? [...new Array(6)].map((_, index) => <MyLoader key={index} />)
            : sortedPizzas.map((pizza) => (
                <Link key={pizza.title} to={`/pizza/${pizza.id}`}>
                  <PizzaCard {...pizza} />
                </Link>
              ))}
        </div>
      )}
      <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} />
    </>
  );
};
