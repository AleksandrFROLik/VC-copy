import Box from '@mui/material/Box';
import React from 'react';
import {TextField} from "@mui/material";

export const AddPosts = () => {
    return (
        <Box sx={{
            border: '1px solid #ccc',
            borderRadius: '10px',
        }}>

                <TextField label='Tell about new'
                           variant='outlined'
                           InputProps={{
                               sx:{
                                   borderRadius: '25px',
                                   backgroundColor:'F9F9F9',
                               }
                           }}
                           sx={{width:'100%'}}
                           margin='normal'
                />


        </Box>
    );
};

