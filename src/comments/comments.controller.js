import Comment from './comment.model.js';

export const createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (err) {
    console.error('Error adding comment:', err);
    res.status(400).json({ message: 'Error adding comment' });
  }
};

export const getCommentsByPost = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    console.error('Error fetching comments:', err);
    res.status(500).json({ message: 'Error fetching comments' });
  }
};
// src/comments/comment.controller.js
export const getComments = (req, res) => {
  res.json({ message: "Aquí van los comentarios" });
};

export const addComment = (req, res) => {
  // lógica para agregar un comentario
  res.json({ message: "Comentario agregado" });
};
export const deleteComment = (req, res) => {
  // lógica para eliminar un comentario
  res.json({ message: "Comentario eliminado" });
};
export const updateComment = (req, res) => {
  // lógica para actualizar un comentario
  res.json({ message: "Comentario actualizado" });
};
export const getCommentById = (req, res) => {
  // lógica para obtener un comentario por ID
  res.json({ message: "Comentario obtenido por ID" });
};
export const getCommentsByUser = (req, res) => {
  // lógica para obtener comentarios por usuario
  res.json({ message: "Comentarios obtenidos por usuario" });
};