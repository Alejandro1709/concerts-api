import asyncHandler from "express-async-handler";
import {
  Concert,
  type ConcertType,
  type ConcertWithId,
  Concerts,
} from "../models/concert.model";
import slugify from "slugify";
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

export const createConcert = asyncHandler(
  async (
    req: Request<Record<string, never>, ConcertWithId, ConcertType>,
    res: Response<ConcertWithId>,
  ) => {
    const result = await Concert.parseAsync(req.body);

    const newer = {
      ...result,
      slug: slugify(result.title, { lower: true }),
    };

    const savedConcert = await Concerts.insertOne(newer);

    if (!savedConcert.acknowledged) {
      throw new Error("Error while inserting document...");
    }

    res.status(201).json({
      _id: savedConcert.insertedId,
      ...result,
    });
  },
);
