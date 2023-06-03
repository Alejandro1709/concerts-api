import type IGroup from "../types/group";

const groups: Array<IGroup> = [
  {
    id: "70ebf64b-80b1-48f0-aaa5-03454202d0a6",
    name: "United States",
    slug: "united-states",
    concerts: [
      {
        id: "f19690fb-4fb9-4a96-ae3f-9eef676df48e",
        title: "Twenty One Pilots: The Bandito Tour",
        slug: "twenty-one-pilots-the-bandito-tour",
        date: "11/11/2018",
        groupId: "70ebf64b-80b1-48f0-aaa5-03454202d0a6",
        location: {
          coordinates: [27.943359, -82.453003],
          address: "401 Channelside Dr, Tampa, FL 33602, United States",
          venue: "Amelie Arena",
        },
      },
    ],
  },
  {
    id: "b1c4dfaf-5ef8-467f-86fd-530dba311ce5",
    name: "Eroupe 2023",
    slug: "europe-2023",
  },
];

export default groups;
