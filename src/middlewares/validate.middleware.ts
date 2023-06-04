import { ZodError } from "zod";
import type { NextFunction, Request, Response } from "express";
import type RequestValidators from "../types/request";

export const validateRequest = (validators: RequestValidators) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (validators.body) {
        req.body = await validators.body.parseAsync(req.body);
      }
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(422);
      }
      next(error);
    }
  };
};
