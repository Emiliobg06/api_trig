import { Router } from "express";
import { getArea } from "../controllers/area";

const router = Router();

router.get("/:id", getArea);

export default router;