import asyncHandler from "express-async-handler";
import Concert from "../models/Concert";
import type { Request, Response } from "express";

export const getConcerts = asyncHandler(
  async (_req: Request, res: Response) => {
    const concerts = await Concert.find();

    res.status(200).json(concerts);
  },
);

export const getConcert = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params;

  const concert = await Concert.findOne({ slug });

  if (!concert) {
    throw new Error("This Concert does not exists!");
  }

  res.status(200).json(concert);
});
