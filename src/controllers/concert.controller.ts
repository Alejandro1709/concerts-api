import asyncHandler from "express-async-handler";
import { type ConcertWithId, Concerts } from "../models/concert.model";
import type { Request, Response } from "express";

export const getConcerts = asyncHandler(
  async (_req: Request, res: Response<ConcertWithId[]>) => {
    const result = await Concerts.find();

    const concerts = await result.toArray();

    res.status(200).json(concerts);
  },
);

export const getConcert = asyncHandler(
  async (req: Request, res: Response<ConcertWithId>) => {
    const { slug } = req.params;

    const concert = await Concerts.findOne({ slug });

    if (!concert) {
      throw new Error("This Concert does not exists!");
    }

    res.status(200).json(concert);
  },
);
