"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const index_controller_1 = require("../controllers/index.controller");
router.get('/users', index_controller_1.getUser);
router.get('/users/:id', index_controller_1.getUserByID);
// router.post('/users',getUser)
// router.put('/users/:id',getUser)
// router.delete('/users/:id',getUser)
exports.default = router;
