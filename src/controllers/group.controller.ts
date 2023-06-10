import asyncHandler from "express-async-handler";
import Group from "../models/Group";
import type { Request, Response } from "express";

export const getGroups = asyncHandler(async (_req: Request, res: Response) => {
  const groups = await Group.find();

  res.status(200).json(groups);
});

export const getGroup = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params;

  const group = await Group.findOne({ slug });

  if (!group) {
    throw new Error("This group does not exists!");
  }

  res.status(200).json(group);
});

export const createGroup = asyncHandler(async (req: Request, res: Response) => {
  const savedGroup = await Group.create(req.body);

  res.status(201).json(savedGroup);
});

// Concerts
export const createConcert = asyncHandler(
  async (req: Request, res: Response) => {
    // const result = await Concert.parseAsync(req.body);
    // const newer = {
    //   ...result,
    //   slug: slugify(result.title, { lower: true }),
    // };
    // const savedConcert = await Concerts.insertOne(newer);
    // if (!savedConcert.acknowledged) {
    //   throw new Error("Error while inserting document...");
    // }
    // res.status(201).json({
    //   _id: savedConcert.insertedId,
    //   ...result,
    // });
  },
);
