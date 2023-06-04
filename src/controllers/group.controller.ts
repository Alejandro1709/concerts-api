import asyncHandler from "express-async-handler";
import {
  type GroupWithId,
  Groups,
  type GroupType,
  Group,
} from "../models/group.model";
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
  }
);

export const getGroup = asyncHandler(
  async (req: Request, res: Response<GroupWithId>) => {
    const { slug } = req.params;

    const group = await Groups.findOne({ slug });

    if (!group) {
      throw new Error("This group does not exists!");
    }

    res.status(200).json(group);
  }
);

export const createGroup = asyncHandler(
  async (
    req: Request<{}, GroupWithId, GroupType>,
    res: Response<GroupWithId>
  ) => {
    const result = await Group.parseAsync(req.body);

    const savedGroup = await Groups.insertOne(result);

    if (!savedGroup.acknowledged) {
      throw new Error("Error while inserting document...");
    }

    res.status(201).json({
      _id: savedGroup.insertedId,
      ...result,
    });
  }
);
