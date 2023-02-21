import classes from './MainNavigation.module.css';
import {NavLink} from "react-router-dom";

function MainNavigation() {

    let activeLinkClassName = ({isActive}) => {
        return isActive ? classes.active : undefined;
    };

    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to="/" className={activeLinkClassName} end={true}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/events" className={activeLinkClassName} end={true}>Events</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
