import {Link, useParams} from "react-router-dom";

const EventDetailPage = () => {
    const params = useParams();
    const eventId = params.id;

    return <>
        <h1>Event Detail Page</h1>
        <p>Event id: {eventId}</p>
        <p><Link to=".." relative="path">Back</Link></p>
    </>;
};

export default EventDetailPage;
