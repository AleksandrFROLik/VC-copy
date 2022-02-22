import React from 'react';
import {IPost} from "../../../../types/types";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

type PostType = {
    posts: IPost[]
}

export const Post = ({posts}: PostType) => {
    return (
        <>{
            posts.map(post => (
                <Box sx={{
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    padding: '2px',
                    marginTop: '5px'
                }}>

                    <Link key={post.author.avatar}
                          to={`profile/${post.author._id}`}
                          style={{
                              display: 'flex',
                              alignItems: 'center',
                              color: '#111',
                              marginBottom: '12px'
                          }}>
                        <Box sx={{
                            position: 'relative',
                            marginRight: 1,
                            width: '50px',
                            height: '50px',
                        }}>
                            <Avatar
                                src={post.author.avatar}
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
                        <div>
                            <div style={{fontSize: '14px'}}> {post.author.name}</div>
                            <div style={{fontSize: '14px', opacity: '0.6'}}> {post.createdAt}</div>
                        </div>
                    </Link>
                    {post.content}
                    {post?.images?.length && (
                        <ImageList variant="masonry" cols={3} gap={8}>
                            {post.images.map(image => (
                            <ImageListItem key={image}>
                                <img
                                    src={image}
                                    alt={''}
                                    loading="lazy"
                                />
                            </ImageListItem>
                            ))}
                        </ImageList>
                    )}
                </Box>
            ))

        }</>

    );
};

