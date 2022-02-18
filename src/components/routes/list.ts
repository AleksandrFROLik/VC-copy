import {Home} from "../pages/home/Home";
import {Profile} from "../pages/profile/Profile";

export const routes = [
    {
        path: '/',
        element: Home,
        auth: true,
    },
    {
        path: '/profile/:id',
        exact: false,
        element: Profile,
        auth: true,
    },
    {
        path: '/messages',
        exact: true,
        element: Home,
        auth: false,
    },
    {
        path: '/message/:id',
        exact: false,
        element: Home,
        auth: false,
    },
    {
        path: '/friends/:id',
        exact: false,
        element: Home,
        auth: true,
    },
    {
        path: '/auth',
        exact: true,
        element: Home,
        auth: false,
    },
]
