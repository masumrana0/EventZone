export interface IEventOwner {
  name: string;
  email: string;
  photoURL: string;
}

export interface IEvent {
  id: string;
  title: string;
  createdAt: string;
  owner: IEventOwner;
  attendeeCount: number;
  location: string;
  description: string;
}

export type IEventFormMode = "create" | "update";
