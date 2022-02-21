import React from 'react';
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";

const users = [
    {
        _id: '123/1',
        avatar: 'https://cdn0.iconfinder.com/data/icons/hipster-men-style/100/Hipster-11-512.png',
        name: 'Aleksandr Frolov',
        isInNetWork: true,
    },
    {
        _id: '123/2',
        avatar: 'https://cdn0.iconfinder.com/data/icons/hipster-men-style/100/Hipster-11-512.png',
        name: 'Ivan Petrov',
        isInNetWork: false,
    },
    {
        _id: '123/3',
        avatar: 'https://cdn0.iconfinder.com/data/icons/hipster-men-style/100/Hipster-11-512.png',
        name: 'John Week',
        isInNetWork: true,
    },
    {
        _id: '123/4',
        avatar: 'https://cdn0.iconfinder.com/data/icons/hipster-men-style/100/Hipster-11-512.png',
        name: 'Same One',
        isInNetWork: true,
    }

]

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
                    {users.map(user => (
                        <Link key={user.avatar}
                              to={`profile/${user._id}`}
                              style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  color: '#111',
                                  marginBottom: '12px'
                              }}>
                            <Box sx={{
                                position: 'relative',
                                marginRight: 1,
                            }}>
                                <Avatar
                                    src={user.avatar}
                                    alt='man'
                                    sx={{width: '46px', height: '46px', borderRadius: '50%'}}/>
                                {user.isInNetWork &&
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
                                </Box>}
                            </Box>
                            <span style={{fontSize: '14px'}}> {user.name}</span>
                        </Link>
                    ))}
                </Box>
            </Card>
        </div>
    );
};

