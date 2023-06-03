export default interface IConcert {
  id: string;
  title: string;
  slug?: string;
  description?: string;
  image_url?: string;
  date: string;
  location: {
    coordinates: number[];
    address: string;
    venue: string;
  };
  groupId: string;
}
