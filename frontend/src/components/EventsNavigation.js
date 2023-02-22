import classes from './EventsNavigation.module.css';
import {NavLink} from "react-router-dom";

function EventsNavigation() {
  let linkClass = ({isActive}) => isActive ? classes.active : undefined;
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/events" className={linkClass} end={true}>All Events</NavLink>
          </li>
          <li>
            <NavLink to="/events/new" className={linkClass} end={true}>New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
