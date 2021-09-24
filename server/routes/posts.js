import express from 'express';

import { getPost, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

const router = express.Router();

router.get('/', getPost);
router.post('/', createPost);
router.patch('/:id', updatePost); //dynamic, updating
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost); //liking is updating a post

export default router;