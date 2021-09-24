import axios from 'axios';

const url = 'https://study-tracker-project.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
// adding redux - all actions towards backend use redux, need to add folders & files - will make it scalable
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);