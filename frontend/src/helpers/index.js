import {postRoute, postUpdateRoute} from "../constants/constants";

export const USERS_BASE_URL = '/api/v1/users';

export const POSTS_BASE_URL = '/api/v1/posts';

// TODO
//export const SERVER_URL = 'http://server.react_node_blog_local:8000'
export const SERVER_URL = 'http://localhost:8000'

export const getURL = (url) => (
    SERVER_URL + url
)

export const getUpdatePostURL = (url) => {
    return postUpdateRoute.replace(':url', url)
}

export const getPostDetailsURL = (url) => {
    return postRoute.replace(':url', url);
}