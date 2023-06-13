import asyncHandler from "express-async-handler";
import Group from "../models/Group";
import Concert from "../models/Concert";
import type { Request, Response } from "express";

export const getGroups = asyncHandler(async (_req: Request, res: Response) => {
  const groups = await Group.find().populate("concerts");

  res.status(200).json(groups);
});

export const getGroup = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params;

  const group = await Group.findOne({ slug }).populate("concerts");

  if (!group) {
    throw new Error("This group does not exists!");
  }

  res.status(200).json(group);
});

export const createGroup = asyncHandler(async (req: Request, res: Response) => {
  const savedGroup = await Group.create(req.body);

  res.status(201).json(savedGroup);
});

// TODO: Update group by slug

// TODO: Delete group by slug and its concerts
export const deleteGroup = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params;

  const group = await Group.findOne({ slug });

  if (!group) {
    throw new Error("This group does not exists!");
  }

  await Concert.deleteMany({ group: group.id });

  await group.deleteOne();

  res.status(200).json({ message: "Group deleted successfully" });
});

// Concerts
export const createConcert = asyncHandler(
  async (req: Request, res: Response) => {
    const { slug } = req.params;

    const group = await Group.findOne({ slug });

    if (!group) {
      throw new Error("This group does not exists!");
    }

    const savedConcert = new Concert({
      ...req.body,
      group: group.id,
    });

    group.concerts.push(savedConcert.id);

    await group.save();
    await savedConcert.save();

    res.status(201).json(savedConcert);
  },
);
