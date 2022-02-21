import React, {FC} from 'react';
import {UserItems} from "./UserItems";
import {MenuItem} from "./menu/MenuItem";

export const Sidebar: FC = () => {
    return (
        <div>
            <UserItems/>
            <MenuItem/>
        </div>
    );
};

