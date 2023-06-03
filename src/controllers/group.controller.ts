import groups from "../data/groups";
import type { Request, Response } from "express";

export const getGroups = async (req: Request, res: Response) => {
  res.status(200).json(groups);
};

export const getGroup = async (req: Request, res: Response) => {
  const { slug } = req.params;

  const foundGroup = groups.find((g) => g.slug === slug);

  res.status(200).json(foundGroup);
};
