import React from 'react';
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";

export const UserItems = () => {
    return (
        <div>
            <Card
                variant='outlined'
                sx={{
                    backgroundColor: "#F1F7FA",
                    padding: '2px'
                }}>
                <Box>
                    <Link to='/profile/:id' style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#111',
                        marginBottom: '12px'
                    }}>
                        <Box sx={{
                            position: 'relative',
                            marginRight: 1,
                            // overflow: 'hidden',
                            // borderRadius: '50%'
                        }}>
                            <Avatar
                                src='https://cdn0.iconfinder.com/data/icons/hipster-men-style/100/Hipster-11-512.png'
                                alt='man'
                                sx={{width: '46px', height: '46px', borderRadius: '50%'}}/>
                            <Box sx={{
                                backgroundColor: '#4FB14F',
                                border: '2px solid #F1F7FA',
                                width: '12px',
                                height: ' 12px',
                                position: 'absolute',
                                bottom: '0',
                                right: '0',
                                borderRadius: '50%',
                            }}>
                            </Box>
                        </Box>
                        <span style={{fontSize: '14px'}}> Aleksandr Frolov</span>
                    </Link>
                </Box>
            </Card>
        </div>
    );
};

