import * as z from "zod";

import { WithId } from "mongodb";

import { db } from "../config/db";

export const Concert = z.object({
  id: z.string().optional(),
  title: z.string({ required_error: "The concert must have a title" }).min(1),
  slug: z.string().optional(),
  description: z.string().optional(),
  image_url: z.string().url().optional(),
  date: z.string(),
  location: z.object({
    coordinates: z.array(z.number()),
    address: z.string().min(1),
    venue: z.string().min(1),
    country: z.string().min(1),
  }),
});

export type ConcertType = z.infer<typeof Concert>;

export type ConcertWithId = WithId<ConcertType>;

export const Concerts = db.collection<ConcertType>("concerts");
