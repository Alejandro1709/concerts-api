import { Router } from "express";
import { getConcerts, getConcert } from "../controllers/concert.controller";
import { type ConcertType } from "../models/concert.model";

const router = Router();

router.route("/").get<Record<string, never>, ConcertType[]>(getConcerts);

router.route("/:slug").get<Record<string, any>, ConcertType>(getConcert);

export default router;
