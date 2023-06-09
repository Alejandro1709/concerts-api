import asyncHandler from "express-async-handler";
import {
  type GroupWithId,
  Groups,
  type GroupType,
  Group,
} from "../models/group.model";
import {
  Concert,
  type ConcertType,
  type ConcertWithId,
  Concerts,
} from "../models/concert.model";
import slugify from "slugify";
import type { NextFunction, Request, Response } from "express";

export const getGroups = asyncHandler(
  async (_req: Request, res: Response<GroupWithId[]>, next: NextFunction) => {
    try {
      const result = await Groups.find();
      const groups = await result.toArray();

      res.status(200).json(groups);
    } catch (error) {
      next(error);
    }
  },
);

export const getGroup = asyncHandler(
  async (req: Request, res: Response<GroupWithId>) => {
    const { slug } = req.params;

    const group = await Groups.findOne({ slug });

    if (!group) {
      throw new Error("This group does not exists!");
    }

    res.status(200).json(group);
  },
);

export const createGroup = asyncHandler(
  async (
    req: Request<Record<string, never>, GroupWithId, GroupType>,
    res: Response<GroupWithId>,
  ) => {
    const result = await Group.parseAsync(req.body);

    const newer = {
      ...result,
      slug: slugify(result.name, { lower: true }),
    };

    const savedGroup = await Groups.insertOne(newer);

    if (!savedGroup.acknowledged) {
      throw new Error("Error while inserting document...");
    }

    res.status(201).json({
      _id: savedGroup.insertedId,
      ...result,
    });
  },
);

// Concerts
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
