import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "./list";
import {Error404} from "../pages/error/Error404";
import {Layout} from "../layout/Layout";

export const Routers = () => {
    const isAuth = true

    return (
        <Layout>
            <Routes>
                {routes.map(route => {
                    if (route.auth && !isAuth) {
                        return false
                    }
                    return (
                        <Route
                            path={route.path}
                            key={`route ${route.path}`}
                            element={<route.element/>}
                        />
                    )
                })}
                <Route element={Error404}/>
            </Routes>
        </Layout>
    );
};

