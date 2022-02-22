import Box from '@mui/material/Box';
import React, {useState} from 'react';
import {TextField} from "@mui/material";
import {IPost, TypeSetState} from "../../../../types/types";
import {users} from "../../../layout/sidebar/menu/dataUsers";

type AddPostsType = {
    setPosts: TypeSetState<IPost[]>
}

export const AddPosts = ({setPosts}: AddPostsType) => {
    const [content, setContent] = useState('')
    const addPostHandler = () => {
        setPosts(prev => [
            {
                author: users[0],
                content,
                createdAt: '5 minuts ago'
            },
            ...prev,
        ])
    }
    return (
        <Box sx={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '2px',
        }}>

            <TextField label='Tell about new'
                       variant='outlined'
                       InputProps={{
                           sx: {
                               borderRadius: '25px',
                               backgroundColor: 'F9F9F9',
                           }
                       }}
                       sx={{width: '100%'}}
                       margin='normal'
                       onKeyPress={addPostHandler}
                       onChange={(e) => setContent(e.currentTarget.value)}
                       value={content}
            />


        </Box>
    );
};

