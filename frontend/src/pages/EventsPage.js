import EventsList from '../components/EventsList';
import {Await, defer, json, useLoaderData} from "react-router-dom";
import {Suspense} from "react";

function EventsPage() {
    // const events = useLoaderData();
    // const data = useLoaderData();
    // if (data.isError) {
    //     return <p>{data.message}</p>;
    // }
    // const events = data.events;
    // return (
    //     <>
    //         {<EventsList events={events}/>}
    //     </>
    // );
    const {events} = useLoaderData();
    return (
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...!</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents}/>}
            </Await>
        </Suspense>);
}

export default EventsPage;

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (response.ok) {
        const json = await response.json();
        return json.events;
        // return response;
    }
    // throw new Response(JSON.stringify({message: 'Could not fetch events!'}), {status: 500});
    throw json({message: 'Could not fetch events!'}, {status: 500});
}

export function loader() {
    return defer({
        events: loadEvents()
    })
}
