import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router-dom";

function EventsPage() {
    // const events = useLoaderData();
    const data = useLoaderData();
    if (data.isError) {
        return <p>{data.message}</p>;
    }
    const events = data.events;
    return (
        <>
            {<EventsList events={events}/>}
        </>
    );
}

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (response.ok) {
        const resData = await response.json();
        return resData;
        // return response;
    } else {
        // return {isError: true, message: 'Could not fetch events!'};
        throw {message: 'Could not fetch events!'};
    }
}
