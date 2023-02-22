import {useRouteError} from 'react-router-dom';
import PageContent from "../components/PageContent";

const ErrorPage = () => {
    const error = useRouteError();
    let title = "Error happened!";
    let message = "Something went wrong!";
    if (error.status === 500) {
        message = error.data.message;
    }
    if (error.status === 404) {
        title = 'Not found!';
        message = 'Page not found';
    }
    return <PageContent title={title}>
        <p>{message}</p>
    </PageContent>;
};

export default ErrorPage;
