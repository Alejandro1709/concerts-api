import { Router } from "express";
import { validateRequest } from "../middlewares/validate.middleware";
import {
  getConcerts,
  getConcert,
  createConcert,
} from "../controllers/concert.controller";
import { Concert, type ConcertType } from "../models/concert.model";

const router = Router();

router
  .route("/")
  .get<Record<string, never>, ConcertType[]>(getConcerts)
  .post(validateRequest({ body: Concert }), createConcert);

router.route("/:slug").get<Record<string, any>, ConcertType>(getConcert);

export default router;
