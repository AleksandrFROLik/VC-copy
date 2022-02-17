import React, {FC} from 'react';
import {MainHeader} from "./haeder/MainHeader";
import {Sidebar} from "./sidebar/Sidebar";

export const Layout: FC = () => {
    return (
        <>
            <MainHeader/>
            <div>
                <Sidebar/>
            </div>
        </>
    );
};

