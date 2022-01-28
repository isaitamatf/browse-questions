import React from 'react';
import { Pagination } from '../../components';
import { ID_TEXT, CATEGORY_TEXT, TYPE_TEXT, DIFFICULTY_TEXT, QUESTIONS_STATMENT_TEXT, CORRECT_ANSWER_TEXT } from '../../constants';
import './table.scss';

const showRows = (rows) => {
  if (rows && rows.length > 0) {
    const html = rows.map((row, index) => {
      if (row) {
        const {
          category,
          type,
          difficulty,
          question,
          correct_answer
        } = row;
        return (
          <tr key={index + 1}>
            <td className='bq-table-body-text'>{index + 1}</td>
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
  return (
    <div id="bq-table">
      <table cellSpacing={0}>
        <thead className='bq-table-header'>
          <tr>
            <th className='bq-table-header-text'>{ID_TEXT}</th>
            <th className='bq-table-header-text'>{CATEGORY_TEXT}</th>
            <th className='bq-table-header-text'>{TYPE_TEXT}</th>
            <th className='bq-table-header-text'>{DIFFICULTY_TEXT}</th>
            <th className='bq-table-header-text'>{QUESTIONS_STATMENT_TEXT}</th>
            <th className='bq-table-header-text'>{CORRECT_ANSWER_TEXT}</th>
          </tr>
        </thead>
        {showRows(browserQuestions)}
        <tfoot />
      </table> 
      <Pagination />
    </div>
  );
}