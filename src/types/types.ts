import {Dispatch, SetStateAction} from "react";
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SvgIconTypeMap} from "@mui/material";

export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export interface IUser {
    _id: string,
    avatar: string,
    name: string,
    isInNetWork?: boolean
}

export interface IPost {
    author: IUser,
    createdAt: string,
    content: string,
    images?: string[],
}

export interface IMenuItem {
    title: string,
    link: string,
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; },
}