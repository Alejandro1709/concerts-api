import { Router } from "express";
import { getGroups, getGroup } from "../controllers/group.controller";
import { type GroupType } from "../models/group.model";

const router = Router();

router.route("/").get<{}, GroupType[]>(getGroups);

router.route("/:slug").get<{}, GroupType>(getGroup);

export default router;
