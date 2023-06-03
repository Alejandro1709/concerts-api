import { ENV } from "../config/secrets";
import type { NextFunction, Request, Response } from "express";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // if (err.name === 'CastError' && err.kind === 'ObjectId') {
  //   statusCode = 404;
  //   message = 'Resource Not Found';
  // }

  res.status(statusCode).json({
    message,
    stack: ENV === "production" ? null : err.stack,
  });
};
