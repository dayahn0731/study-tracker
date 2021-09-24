import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import moment from 'moment';

import useStyles from './styles'
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts'

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

const viewPhoto = (selectedFile) => {
    console.log(selectedFile)
    // window.open(selectedFile, '_blank');
    let data = selectedFile;
    let w = window.open('about:blank');
    let image = new Image();
    image.src = data;
    setTimeout(function(){
    w.document.write(image.outerHTML);
    }, 0);
    // return(
    //     <div className="bg-white">
    //         <img src={selectedFile} alt="Notes"/>
    //     </div>
    // );
}
    
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.course}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div>
                <Button className={classes.overlay3} style={{color: 'white'}} size="small" onClick={() => viewPhoto(post.selectedFile)}>
                    <FullscreenIcon fontSize="default"/>
                </Button>
                <Button className={classes.overlay2} style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom> {post.title} </Typography>
            <CardContent>
                <Typography variant="body2" component="p"> {post.note} </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon frontSize="small" />
                    &nbsp;Like
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon frontSize="small" />
                    &nbsp;Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;