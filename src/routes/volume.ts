import { Router } from "express";
import { getVolume } from "../controllers/volumen";

const router = Router();

router.get("/:id", getVolume);

export default router;