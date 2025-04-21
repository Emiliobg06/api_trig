import { Router } from "express";
import { getPerimeter } from "../controllers/perimeter";

const router = Router();

router.get("/:id", getPerimeter);

export default router;