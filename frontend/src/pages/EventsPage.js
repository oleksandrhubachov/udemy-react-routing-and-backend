import EventsList from '../components/EventsList';
import {json, useLoaderData} from "react-router-dom";

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
        return await response.json();
        // return response;
    } else {
        // throw new Response(JSON.stringify({message: 'Could not fetch events!'}), {status: 500});
        throw json({message: 'Could not fetch events!'}, {status: 500});
    }
}
