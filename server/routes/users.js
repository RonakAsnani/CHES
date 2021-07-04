import express from "express";

import { signin, signup, update, getUsers } from "../controllers/user.js";
const router = express.Router();

router.get("/", getUsers);
router.post("/signin", signin);
router.post("/signup", signup);
router.post("/updateUser", update);

export default router;
