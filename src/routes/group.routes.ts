import { Router } from "express";
import {
  getGroups,
  getGroup,
  createGroup,
  createConcert,
} from "../controllers/group.controller";
import { Group, type GroupType } from "../models/group.model";
import { validateRequest } from "../middlewares/validate.middleware";
import { Concert } from "../models/concert.model";

const router = Router();

router
  .route("/")
  .get<Record<string, never>, GroupType[]>(getGroups)
  .post(validateRequest({ body: Group }), createGroup);

router.route("/:slug").get<Record<string, never>, GroupType>(getGroup);

router
  .route("/:slug/concerts")
  .post(validateRequest({ body: Concert }), createConcert);

export default router;
