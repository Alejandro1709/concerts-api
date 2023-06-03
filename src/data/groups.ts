import { type GroupType } from "../models/group.model";

const groups: Array<GroupType> = [
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
          country: "United States",
        },
      },
      {
        id: "d8e2d454-06a3-45a3-a509-daae0c847fdb",
        title: "Roger Waters: Us + Them Tour",
        slug: "roger-waters-us-plus-them-tour",
        date: "06/07/2017",
        groupId: "70ebf64b-80b1-48f0-aaa5-03454202d0a6",
        location: {
          coordinates: [37.333549, -121.901154],
          address: "525 W Santa Clara St, San Jose, CA 95113, United States",
          venue: "SAP Center",
          country: "United States",
        },
      },
      {
        id: "b32d4500-058c-42b5-87ef-cc18abe2e479",
        title: "Enrique Iglesias and Pitbull Live",
        slug: "enrique-iglesias-and-pitbull-live",
        date: "06/09/2017",
        groupId: "70ebf64b-80b1-48f0-aaa5-03454202d0a6",
        location: {
          coordinates: [37.333549, -121.901154],
          address: "525 W Santa Clara St, San Jose, CA 95113, United States",
          venue: "SAP Center",
          country: "United States",
        },
      },
    ],
  },
  {
    id: "b1c4dfaf-5ef8-467f-86fd-530dba311ce5",
    name: "South America",
    slug: "south-america",
    concerts: [
      {
        id: "67b7d7e3-8dcb-4527-bbdf-1553edd4f574",
        title: "Coldplay: A Head Full Of Dreams",
        slug: "coldplay-a-head-full-of-dreams",
        date: "04/05/2016",
        groupId: "b1c4dfaf-5ef8-467f-86fd-530dba311ce5",
        location: {
          coordinates: [-12.0667, -77.03481],
          address: "C. José Díaz s/n, Lima 15046",
          venue: "Estadio Nacional",
          country: "Peru",
        },
      },
    ],
  },
];

export default groups;
