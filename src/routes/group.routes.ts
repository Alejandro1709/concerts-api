import { Router } from "express";
import { getGroups, getGroup } from "../controllers/group.controller";

const router = Router();

router.route("/").get(getGroups);

router.route("/:slug").get(getGroup);

export default router;
