import { Request, Response, NextFunction } from "express";

export const validateIdHandler = (req: Request, res: Response, next: NextFunction): void => {
    const id = parseInt(req.params.id);

    if (isNaN(id) || id <= 0) {
        res.status(400).json({ error: "Invalid ID. ID must be a positive number." });
    } else {
        next(); // Pass control to the next middleware or controller
    }
};