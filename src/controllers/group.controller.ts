import asyncHandler from "express-async-handler";
import { type GroupWithId, Groups } from "../models/group.model";
import type { NextFunction, Request, Response } from "express";

export const getGroups = asyncHandler(
  async (req: Request, res: Response<GroupWithId[]>, next: NextFunction) => {
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
