import * as Icons from '@mui/icons-material'
import {IMenuItem} from "../../../../types/types";

export const dataMenu: IMenuItem[] = [
    {
        title: 'Messages',
        link: '/messages',
        icon: Icons.QuestionAnswer
    },
    {
        title: 'My page',
        link: '/profile',
        icon: Icons.Home
    },
    {
        title: 'Frends',
        link: '/friends',
        icon: Icons.People
    },
    {
        title: 'News',
        link: '/',
        icon: Icons.Article
    }
]