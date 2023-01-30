import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>METASSAFY</div>
      <nav>
        <ul>
          <li>
            <Link to="/">MainPage</Link>
          </li>
          <li>
            <Link to="/page1">Test Page1</Link>
          </li>
          <li>
            <Link to="/page2">Canvas</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
