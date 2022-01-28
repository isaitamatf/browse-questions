import React from 'react';
import './pagination.scss';

const showPagination = (currentPage, lastPage, setCurrentPage) => {
  const numberOfPage = [];
  for (var i = 0; i < lastPage; i++) {
    numberOfPage.push(i);
  }
  const html = numberOfPage.map((page) => {
    console.log('currentPage', currentPage);
    console.log('page', page);
    const paginationValueClass = `bq-pagination-value ${currentPage === page ? 'bq-pagination-value-selected' : ''}`;
    const paginationValueOnClick = () => setCurrentPage(page);
    return (
      <div key={`bq-pagination-value-${i}`} className={paginationValueClass} onClick={paginationValueOnClick}>
        {page + 1}
      </div>
    );
  });
  return (
    <div className='bq-pagination-content'>
      {html}
    </div>
  );
};

export default function Pagination({currentPage, lastPage, setCurrentPage}) {
  return (
    <div id="bq-pagination">
      {showPagination(currentPage, lastPage, setCurrentPage)}
    </div>
  );
}