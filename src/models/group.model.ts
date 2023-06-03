import * as z from "zod";

const Group = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  slug: z.string().optional(),
  concerts: z.array(
    z.object({
      id: z.string().min(1).uuid(),
      title: z.string().min(1),
      slug: z.string().optional(),
      description: z.string().optional(),
      image_url: z.string().url().optional(),
      date: z.string().datetime(),
      groupId: z.string().uuid(),
      location: z.object({
        coordinates: z.array(z.number()),
        address: z.string().min(1),
        venue: z.string().min(1),
        country: z.string().min(1),
      }),
    })
  ),
});

type GroupType = z.infer<typeof Group>;

export default GroupType;
