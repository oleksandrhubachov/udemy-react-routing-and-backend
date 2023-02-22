import EventsNavigation from "./EventsNavigation";
import {Outlet} from "react-router-dom";

const EventsRoot = () => {
    return <>
        <EventsNavigation/>
        <Outlet/>
    </>
};

export default EventsRoot;
