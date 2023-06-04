import { Router } from "express";
import {
  getGroups,
  getGroup,
  createGroup,
} from "../controllers/group.controller";
import { Group, type GroupType } from "../models/group.model";
import { validateRequest } from "../middlewares/validate.middleware";

const router = Router();

router
  .route("/")
  .get<{}, GroupType[]>(getGroups)
  .post(validateRequest({ body: Group }), createGroup);

router.route("/:slug").get<{}, GroupType>(getGroup);

export default router;
