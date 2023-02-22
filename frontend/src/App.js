import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import EventsPage, {loader as eventsLoader} from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import RootLayout from "./pages/RootLayout";
import EventsRoot from "./components/EventsRoot";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {
                path: 'events', element: <EventsRoot/>, children: [
                    {index: true, element: <EventsPage/>, loader: eventsLoader},
                    {path: ':eventId', element: <EventDetailPage/>},
                    {path: 'new', element: <NewEventPage/>},
                    {path: ':eventId/edit', element: <NewEventPage/>},
                ]
            },
        ]
    },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
