import { apiURI } from './enviroments';

const environment = process.env.NODE_ENV;
const serviceURLs = apiURI();
const timeoutMin = 1e3 * 60;
const timeoutHour = timeoutMin * 60;
const timeoutDay =  timeoutHour * 24;
const errorMessages = {
    NOT_FOUND: {
        PAGE: 'Page not found.',
        CONTENT: 'User not found.',
        SITE: 'Site not found.'
    }
};

export {
    environment,
    errorMessages,
    serviceURLs,
    timeoutDay,
    timeoutHour,
    timeoutMin
}