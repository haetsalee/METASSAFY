import BackgroundBox from '../phone/BackgroundBox';
import MajorPositionClass from '../phone/MajorPositionClass';
import TextGroupComponent from '../phone/TextGroupComponent';
import classes from './Phone.module.css'

function Phone(props) {
  return <div className={classes.phone}>
    {props.children}
  </div>
}

export default Phone;