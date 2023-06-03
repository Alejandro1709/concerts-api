import { Router } from "express";
import { getGroups } from "../controllers/group.controller";

const router = Router();

router.route("/").get(getGroups);

export default router;
