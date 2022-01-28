import React, { useState } from 'react';
import { Pagination } from '../../components';
import { CATEGORY_TEXT, TYPE_TEXT, DIFFICULTY_TEXT, QUESTIONS_STATMENT_TEXT, CORRECT_ANSWER_TEXT, ROWS_PER_PAGE } from '../../constants';
import './table.scss';

const showRows = (rows, currentPage) => {
  if (rows && rows.length > 0) {
    const html = rows.map((row, index) => {
      let maxLimitPage = currentPage + ROWS_PER_PAGE;
      let minLimitPage = maxLimitPage - ROWS_PER_PAGE;
      if (row && index >= minLimitPage && index < maxLimitPage) {
        const {
          category,
          type,
          difficulty,
          question,
          correct_answer
        } = row;
        return (
          <tr key={index + 1}>
            <td className='bq-table-body-text'>{category}</td>
            <td className='bq-table-body-text bq-table-first-letter'>{type}</td>
            <td className='bq-table-body-text bq-table-first-letter'>{difficulty}</td>
            <td className='bq-table-body-text'>{question}</td>
            <td className='bq-table-body-text bq-table-green'>{correct_answer}</td>
          </tr>
        );
      }
    });
    return (
      <tbody className='bq-table-body'>{html}</tbody>
    );
  }
};

/**
 * @param browserQuestions Data from the API
 */
export default function Table({browserQuestions}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  
  if (browserQuestions.length !== total) {
    setTotal(browserQuestions.length);
    setLastPage(Math.ceil(browserQuestions.length / ROWS_PER_PAGE));
  }

  return (
    <div id="bq-table">
      <table cellSpacing={1}>
        <thead className='bq-table-header'>
          <tr>
            <th className='bq-table-header-text'>{CATEGORY_TEXT}</th>
            <th className='bq-table-header-text'>{TYPE_TEXT}</th>
            <th className='bq-table-header-text'>{DIFFICULTY_TEXT}</th>
            <th className='bq-table-header-text'>{QUESTIONS_STATMENT_TEXT}</th>
            <th className='bq-table-header-text'>{CORRECT_ANSWER_TEXT}</th>
          </tr>
        </thead>
        {showRows(browserQuestions, currentPage)}
        <tfoot></tfoot>
      </table> 
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}