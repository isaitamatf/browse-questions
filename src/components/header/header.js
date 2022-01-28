import React from 'react';
import { faArrowRight, faBars, faComments, faGem, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../components';
import { BROWSE_TEXT, ADD_NEW_QUESTIONS_TEXT, API_TEXT, DISCUSS_TEXT, LOGIN_TEXT } from '../../constants';
import './header.scss';

export default function Header() {
  return (
    <div id='bq-header'>
      <Button text={BROWSE_TEXT} icon={faBars} />
      <Button text={ADD_NEW_QUESTIONS_TEXT} icon={faPlus} />
      <Button text={API_TEXT} icon={faGem} />
      <Button text={DISCUSS_TEXT} icon={faComments} />
      <Button text={LOGIN_TEXT} icon={faArrowRight}
      />
    </div>
  );
}