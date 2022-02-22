import React, {FC} from 'react';
import Box from "@mui/material/Box";
import {AddPosts} from "./addPosts/AddPosts";

export const Home: FC = () => {
    return (
        <Box>
            <AddPosts/>
        </Box>
    );
};


