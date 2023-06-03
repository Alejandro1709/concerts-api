import type IConcert from "./concert";

export default interface IGroup {
  id: string;
  name: string;
  slug?: string;
  concerts?: Array<IConcert>;
}
