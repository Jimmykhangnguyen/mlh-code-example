import express from "express";
import { 
    createConnection,
    getAllConnections,
    deleteConnection,
} from "../controllers/connectionController.js";

const router = express.Router();

router.get("/", getAllConnections);
router.delete("/:id", deleteConnection);
router.post("/", createConnection);

export default router;
