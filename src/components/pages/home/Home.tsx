import React, {FC, useState} from 'react';
import Box from "@mui/material/Box";
import {AddPosts} from "./addPosts/AddPosts";
import {IPost} from "../../../types/types";
import {Post} from "./addPosts/Post";
import {initialPosts} from "./addPosts/initialPosts";

export const Home: FC = () => {
    const [posts, setPosts] = useState<IPost[]>(initialPosts)
    return (
        <Box>
            <AddPosts setPosts={setPosts}/>
            <Post posts={posts}/>
        </Box>
    );
};


