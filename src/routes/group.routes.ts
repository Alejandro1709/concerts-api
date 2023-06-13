import { Router } from "express";
import {
  getGroups,
  getGroup,
  createGroup,
  createConcert,
} from "../controllers/group.controller";

const router = Router();

router.route("/").get(getGroups).post(createGroup);

router.route("/:slug").get(getGroup);

router.route("/:slug/concerts").post(createConcert);

export default router;
