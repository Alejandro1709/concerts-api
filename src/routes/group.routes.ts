import { Router } from "express";
import {
  getGroups,
  getGroup,
  createGroup,
} from "../controllers/group.controller";
import { type GroupType } from "../models/group.model";

const router = Router();

router.route("/").get<{}, GroupType[]>(getGroups).post(createGroup);

router.route("/:slug").get<{}, GroupType>(getGroup);

export default router;
