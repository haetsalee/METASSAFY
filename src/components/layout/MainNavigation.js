import { useContext } from "react";
import { Link } from "react-router-dom";
// import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header>
      <div>Meta SSAFY</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>MainPage</Link>
          </li>
          <li>
            <Link to='/page1'>Page1</Link>
          </li>
          <li>
            <Link to='/page2'>Page2</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation; 