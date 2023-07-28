import { Router } from "express";
import { create, list, destroy, show, update } from "../controllers/category";

const router = Router();

router.get("/category", list);
router.get("/category/:id", show);
router.post("/category", create);
router.patch("/category/:id", update);
router.delete("/category/:id", destroy);
export default router;
