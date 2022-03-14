import { Router } from "express";

const router = Router();

import {getUser,getUserByID} from "../controllers/index.controller"
router.get('/users',getUser)
router.get('/users/:id',getUserByID)
// router.post('/users',getUser)
// router.put('/users/:id',getUser)
// router.delete('/users/:id',getUser)

export default router;