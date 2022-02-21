import React from 'react';
import {Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {QuestionAnswer} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {dataMenu} from "./DataMenu";

export const MenuItem = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Card
                variant='outlined'
                sx={{
                    padding: '2px',
                    backgroundColor: '#F1F7FA',
                    border: 'none',
                    borderRadius: '3px',
                    marginTop: '5px',
                    marginBottom: '10px'
                }}
            >
                <List>
                    {dataMenu.map(item => (
                        <ListItem key={item.link} disablePadding>
                            <ListItemButton onClick={() => navigate(item.link)}>
                                <ListItemIcon>
                                    <item.icon/>
                                </ListItemIcon>
                                <ListItemText primary={item.title}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Card>
        </div>
    );
};

