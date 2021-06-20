import express from "express";

import { signin, signup, update } from "../controllers/user.js";
const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/updateUser", update);

export default router;
