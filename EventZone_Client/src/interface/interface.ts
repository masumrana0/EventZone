export interface IEventOwner {
  _id?: string;
  name: string;
  email: string;
  photoURL: string;
}

export interface IEvent {
  _id?: string;
  title: string;
  createdAt: string;
  owner: IEventOwner;
  dateTime: string;
  attendeeCount: number;
  location: string;
  description: string;
  joinedUsers: string[];
}

export type IEventFormMode = "create" | "update";
