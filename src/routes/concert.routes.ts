import { Router } from "express";
import { validateRequest } from "../middlewares/validate.middleware";
import { getConcerts } from "../controllers/concert.controller";

const router = Router();

router.route("/").get(getConcerts);

export default router;
