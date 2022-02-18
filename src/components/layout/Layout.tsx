import React, {FC} from 'react';
import {MainHeader} from "./haeder/MainHeader";
import {Sidebar} from "./sidebar/Sidebar";
import Grid from "@mui/material/Grid";

export const Layout: FC = ({children}) => {
    return (
        <>
            <MainHeader/>
            <Grid container spacing={2} marginX={5} marginTop={2}>
                <Grid item  md={2}>
                    <Sidebar/>
                </Grid>
                <Grid item  md={10}>
                    {children}
                </Grid>
            </Grid>

        </>
    );
};

