import { Request, Response } from "express";
import PerimeterService from "../services/perimeter";

const perimeterService = new PerimeterService();

export const getPerimeter = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const perimeter = perimeterService.calculatePerimeter(id);

    if (perimeter === null) {
        res.status(404).json({ error: "Square not found" });
    } else {
        res.status(200).json({ id, perimeter });
    }
};