import { Router } from "express";
import {
  getGroups,
  getGroup,
  createGroup,
  deleteGroup,
  createConcert,
} from "../controllers/group.controller";

const router = Router();

router.route("/").get(getGroups).post(createGroup);

router.route("/:slug").get(getGroup).delete(deleteGroup);

router.route("/:slug/concerts").post(createConcert);

export default router;
