import * as z from "zod";

import { WithId } from "mongodb";

import { db } from "../config/db";

export const Group = z.object({
  id: z.string().optional(),
  name: z.string({ required_error: "The group must have a title" }).min(1),
  slug: z.string().optional(),
  concerts: z
    .array(
      z.object({
        id: z.string(),
        title: z
          .string({ required_error: "The concert must have a title" })
          .min(1),
        slug: z.string().optional(),
        description: z.string().optional(),
        image_url: z.string().url().optional(),
        date: z.string().datetime(),
        groupId: z.string(),
        location: z.object({
          coordinates: z.array(z.number()),
          address: z.string().min(1),
          venue: z.string().min(1),
          country: z.string().min(1),
        }),
      }),
    )
    .optional(),
});

export type GroupType = z.infer<typeof Group>;

export type GroupWithId = WithId<GroupType>;

export const Groups = db.collection<GroupType>("groups");
