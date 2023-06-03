import type { Request, Response } from "express";

export const getGroups = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello Groups" });
};
