import { Request, Response } from "express";
import AreaService from "../services/area";

const areaService = new AreaService();

export const getArea = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const area = areaService.calculateArea(id);

    if (area === null) {
        res.status(404).json({ error: "Square not found" });
    } else {
        res.status(200).json({ id, area });
    }
};