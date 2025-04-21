import { Request, Response } from "express";
import VolumeService from "../services/volumen";

const volumeService = new VolumeService();

export const getVolume = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const volume = volumeService.calculateVolume(id);

    if (volume === null) {
        res.status(404).json({ error: "Square not found" });
    } else {
        res.status(200).json({ id, volume });
    }
};