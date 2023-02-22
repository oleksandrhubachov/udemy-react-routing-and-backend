import {json, redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
    const data = useRouteLoaderData('event-detail');

    return <EventItem event={data.event}/>;
};

export default EventDetailPage;

export async function loader({request, params}) {
    const id = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + id);
    if (response.ok) {
        return response;
    }
    throw json({message: 'Could not fetch details for selected event ' + id}, {status: 500});
}

export async function action({params, request}) {
    let id = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + id, {method: request.method});

    if (response.ok) {
        return redirect('/events')
    }
    throw json({message: 'Could not delete event ' + id}, {status: 500});
}
