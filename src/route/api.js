import express from "express";
import userController from "../controller/user-controller.js";
import penyelenggaraLayananController from "../controller/penyelenggara-layanan-controller.js";
import standarLayananController from "../controller/standar-layanan-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import fileUpload from "express-fileupload";

const userRouter = new express.Router();
userRouter.use(authMiddleware);
userRouter.use(fileUpload());

// User API
userRouter.get('/api/users/current', userController.get);
userRouter.patch('/api/users/current', userController.update);
userRouter.delete('/api/users/logout', userController.logout);

// Penyelenggara Layanan API
userRouter.post('/api/penyelenggara-layanan', penyelenggaraLayananController.create);
userRouter.get('/api/penyelenggara-layanan/:Id', penyelenggaraLayananController.get);
userRouter.patch('/api/penyelenggara-layanan/:Id', penyelenggaraLayananController.update);
userRouter.delete('/api/penyelenggara-layanan/:Id', penyelenggaraLayananController.remove);
userRouter.get('/api/penyelenggara-layanan', penyelenggaraLayananController.search);

// Standar Layanan API
userRouter.post('/api/standar-layanan', standarLayananController.create);

export { userRouter }