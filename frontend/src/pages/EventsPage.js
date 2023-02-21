import {Link} from "react-router-dom";

const EVENTS = [
    {id: 'e1', title: 'Event A'},
    {id: 'e2', title: 'Event B'},
    {id: 'e3', title: 'Event C'}
];
const EventsPage = () => {
    return <>
        <h1>Events Page</h1>
        <ul>
            {EVENTS.map(e => <li><Link to={`/events/${e.id}`}>{e.title}</Link></li>)}
        </ul>
    </>;
};

export default EventsPage;
