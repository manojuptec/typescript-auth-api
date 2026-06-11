import express from "express";
import {
  register,
  login,
  profile
} from "../controllers/User";

import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get(
  "/profile",
  protect,
  profile
);

export default router;