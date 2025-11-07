import React from 'react';
import styles from '../../Header.module.css';

export const HeaderListItem = ({ children }: React.HtmlHTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={styles.menuitem}>{ children }</li>
  )
}
