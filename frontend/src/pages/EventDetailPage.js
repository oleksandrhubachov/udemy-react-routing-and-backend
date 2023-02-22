import {Await, defer, json, redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import {Suspense} from "react";

const EventDetailPage = () => {
    const {event, events} = useRouteLoaderData('event-detail');

    return (<>
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading event...</p>}>
            <Await resolve={event}>
                {loadedEvent => <EventItem event={loadedEvent}/>}
            </Await>
        </Suspense>
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading events...</p>}>
            <Await resolve={events}>
                {loadedEvents => <EventsList events={loadedEvents}/>}
            </Await>
        </Suspense>
    </>);
};

export default EventDetailPage;

async function loadEvent(id) {
    const response = await fetch('http://localhost:8080/events/' + id);
    if (response.ok) {
        const json = await response.json();
        return json.event;
    }
    throw json({message: 'Could not fetch details for selected event ' + id}, {status: 500});
}

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

export async function loader({request, params}) {
    const id = params.eventId;
    return defer({
        event: await loadEvent(id),
        events: loadEvents()
    });
}

export async function action({params, request}) {
    let id = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + id, {method: request.method});

    if (response.ok) {
        return redirect('/events')
    }
    throw json({message: 'Could not delete event ' + id}, {status: 500});
}
