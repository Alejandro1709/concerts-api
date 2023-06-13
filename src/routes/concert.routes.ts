import { Router } from "express";
import { getConcerts, getConcert } from "../controllers/concert.controller";

const router = Router();

router.route("/").get(getConcerts);

router.route("/:slug").get(getConcert);

export default router;
