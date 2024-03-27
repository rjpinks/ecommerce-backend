import { Router } from "express";
import productRoutes from "./ProductRoutes"

const router = Router();

//Directing Routes
router.use('/product', productRoutes);

export default router;
