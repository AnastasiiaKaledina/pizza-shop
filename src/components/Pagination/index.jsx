import React from 'react';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';

const Pagination = ({ setPageNumber, pageNumber }) => {
  const dispatch = useDispatch();
  
  return (
    <ReactPaginate
      className={styles.wrapper}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => dispatch(setPageNumber(e.selected + 1))} // можно вывести в консоль и посмотреть, что вернет e
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={pageNumber - 1}
      previousLabel="<"
    />
  );
};

export default Pagination;
