import express from "express";
import areaRoutes from "./routes/area";
import perimeterRoutes from "./routes/perimeter";
import volumeRoutes from "./routes/volume";


const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/area", areaRoutes);
app.use("/api/perimeter", perimeterRoutes);
app.use("/api/volume", volumeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});