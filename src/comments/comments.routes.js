import express from 'express';
import { createComment, getCommentsByPost } from './comment.controller.js';

const commentRouter = express.Router();

commentRouter.post('/', createComment);
commentRouter.get('/:postId', getCommentsByPost);

export default commentRouter;