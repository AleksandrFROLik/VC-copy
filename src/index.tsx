import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Routers} from "./components/routes/Routers";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routers/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


